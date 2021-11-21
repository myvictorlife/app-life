/*
 * File: sign-up.module.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Sunday, 21st November 2021 11:48:09 am
 * Copyright © 2021 My Custom Life
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { ComponentsModule } from '@life-components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [SignUpPage],
})
export class SignUpPageModule {}
