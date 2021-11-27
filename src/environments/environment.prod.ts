/*
 * File: environment.prod.ts
 * Project: LIFE
 * Created: Thursday, 25th November 2021 6:47:38 pm
 * Last Modified: Friday, 26th November 2021 8:11:17 pm
 * Copyright © 2021 My Custom Life
 */

export const environment = {
  production: true,
  baseUrl: 'https://us-central1-app-life-58b4f.cloudfunctions.net',
  functions: {
    health: '/lifeHealth',
    user: '/lifeUser',
  },
  apis: {
    health: {
      info: '/info',
    },
    auth: {
      login: '/auth/login',
    },
    user: {
      createNewUser: '/signup',
    },
  },
  firebaseConfig: {
    apiKey: 'AIzaSyAtZFuq-QT11Wni8jeO7iZ7T1udRIT8kmg',
    authDomain: 'app-life-58b4f.firebaseapp.com',
    projectId: 'app-life-58b4f',
    storageBucket: 'app-life-58b4f.appspot.com',
    messagingSenderId: '8568166965',
    appId: '1:8568166965:web:ce41c368714568b47fef7c',
    measurementId: 'G-F9NTS1DPMQ',
  },
};
