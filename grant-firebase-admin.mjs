import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const email = process.argv[2]?.trim();
if (!email) {
    console.error('Usage: node grant-firebase-admin.mjs admin@example.com');
    process.exit(1);
}

initializeApp({
    credential: applicationDefault(),
    projectId: 'project-8285027657505595761'
});

const auth = getAuth();
const user = await auth.getUserByEmail(email);
await auth.setCustomUserClaims(user.uid, {
    ...(user.customClaims || {}),
    admin: true
});

console.log(`Granted the admin claim to ${email}. Ask that user to sign out and back in.`);
