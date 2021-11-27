/*
 * File: environment.interface.ts
 * Project: LIFE
 * Created: Thursday, 25th November 2021 6:30:39 pm
 * Last Modified: Friday, 26th November 2021 8:12:47 pm
 * Copyright © 2021 My Custom Life
 */

export interface Functions {
  health: string;
  user: string;
}
export interface APIS {
  health: any;
  auth: any;
  user: any;
}
export interface Environment {
  production: boolean;
  baseUrl: string;
  functions: Functions;
  apis: APIS;
  firebaseConfig: any;
}
