import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const projectId = 'project-8285027657505595761';
const dataDirectory = join(dirname(fileURLToPath(import.meta.url)), 'data');
const overwrite = process.argv.includes('--overwrite');
const dryRun = process.argv.includes('--dry-run');

const datasets = [
    {
        id: 'team-appearance',
        file: 'team-appearance.js',
        variables: ['teamLogos', 'lamigoTeamBackgroundColor', 'teamBackgroundColors']
    },
    {
        id: 'championship',
        file: 'championship-data.js',
        variables: ['seasonChampionData', 'teamMergerRelations', 'teamSeasonProfileData']
    },
    {
        id: 'challenge-series',
        file: 'challenge-series-data.js',
        variables: ['challengeSeriesResults']
    },
    {
        id: 'international-history',
        file: 'international-history-data.js',
        variables: [
            'internationalCompetitionCategories',
            'internationalWorldCupSource',
            'internationalOlympicsSource',
            'internationalCompetitionResults'
        ]
    },
    {
        id: 'team-history',
        file: 'team-history-data.js',
        variables: ['teamHistoryData']
    },
    {
        id: 'year-archive',
        file: 'year-archive-data.js',
        variables: [
            'yearLeagueArchiveData',
            'historicalYearLeagueArchiveData',
            'tmlYearStandingsData',
            'tmlYearStandingsSources'
        ]
    }
];

async function loadDataset({ id, file, variables }) {
    const source = await readFile(join(dataDirectory, file), 'utf8');
    const exportObject = variables.map(name => `${name}: ${name}`).join(',\n');
    const sandbox = {};
    runInNewContext(`${source}\nglobalThis.__firestoreImport = { ${exportObject} };`, sandbox, {
        filename: file,
        timeout: 5_000
    });

    const data = JSON.parse(JSON.stringify(sandbox.__firestoreImport));
    const sizeBytes = Buffer.byteLength(JSON.stringify(data), 'utf8');
    if (sizeBytes > 900_000) {
        throw new Error(`${file} is ${sizeBytes} bytes; split it into smaller Firestore documents first.`);
    }

    return { id, file, data, sizeBytes };
}

const loadedDatasets = await Promise.all(datasets.map(loadDataset));

if (dryRun) {
    for (const dataset of loadedDatasets) {
        console.log(`${dataset.file} -> appData/${dataset.id} (${dataset.sizeBytes} bytes)`);
    }
    console.log('Dry run complete; no Firestore documents were changed.');
    process.exit(0);
}

const [{ applicationDefault, initializeApp }, { getFirestore }] = await Promise.all([
    import('firebase-admin/app'),
    import('firebase-admin/firestore')
]);
initializeApp({ credential: applicationDefault(), projectId });
const db = getFirestore();
const batch = db.batch();

for (const dataset of loadedDatasets) {
    const ref = db.collection('appData').doc(dataset.id);
    const document = {
        sourceFile: dataset.file,
        data: dataset.data
    };
    if (overwrite) batch.set(ref, document);
    else batch.create(ref, document);
}

try {
    await batch.commit();
    console.log(`Imported ${loadedDatasets.length} datasets into Firestore project ${projectId}.`);
} catch (error) {
    if (error.code === 6 || error.code === 'already-exists') {
        console.error('Import stopped because one or more appData documents already exist.');
        console.error('Review the existing documents; pass --overwrite only if replacing these six datasets is intended.');
    }
    throw error;
}
