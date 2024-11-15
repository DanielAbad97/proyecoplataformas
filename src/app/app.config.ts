import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyC-93ZXDJ-m2wFvM4pcvj9ZqfaltrX8eZA",
      authDomain: "parqueaderopub.firebaseapp.com",
      projectId: "parqueaderopub",
      storageBucket: "parqueaderopub.firebasestorage.app",
      messagingSenderId: "512189215496",
      appId: "1:512189215496:web:fff11269133741536bf2bd"
    })),
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"parqueaderopub","appId":"1:512189215496:web:fff11269133741536bf2bd","storageBucket":"parqueaderopub.firebasestorage.app","apiKey":"AIzaSyC-93ZXDJ-m2wFvM4pcvj9ZqfaltrX8eZA","authDomain":"parqueaderopub.firebaseapp.com","messagingSenderId":"512189215496"})), provideAuth(() => getAuth())
  ]
};
