import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-93ZXDJ-m2wFvM4pcvj9ZqfaltrX8eZA",
    authDomain: "parqueaderopub.firebaseapp.com",
    projectId: "parqueaderopub",
    storageBucket: "parqueaderopub.firebasestorage.app",
    messagingSenderId: "512189215496",
    appId: "1:512189215496:web:fff11269133741536bf2bd"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export const firebaseProviders = [
  provideFirebaseApp(() => app),
  provideAuth(() => auth),
  provideFirestore(() => firestore)
];
