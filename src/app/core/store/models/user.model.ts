/*
 * File: user.model.ts
 * Project: LIFE
 * Created: Sunday, 14th November 2021 2:34:23 pm
 * Last Modified: Saturday, 20th November 2021 7:03:19 pm
 * Copyright © 2021 My Custom Life
 */

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: {
    code: string;
    phoneNumber: number;
  };
}
