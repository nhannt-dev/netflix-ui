import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import keyObj from './key';

const firebaseConfig = {
    apiKey: keyObj.API_KEY,
    authDomain: keyObj.AUTH_DOMAIN,
    projectId: keyObj.PROJECT_ID,
    storageBucket: keyObj.STORAGE_BUCKET,
    messagingSenderId: keyObj.MESSAGING_SENDER_ID,
    appId: keyObj.APP_ID,
  };

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)