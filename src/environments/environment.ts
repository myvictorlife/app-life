/*
 * File: environment.ts
 * Project: LIFE
 * Created: Thursday, 25th November 2021 4:57:17 pm
 * Last Modified: Friday, 26th November 2021 8:10:52 pm
 * Copyright © 2021 My Custom Life
 */

import { Environment } from './environment.interface';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
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
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
