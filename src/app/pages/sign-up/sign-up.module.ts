/*
 * File: sign-up.module.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Wednesday, 24th November 2021 5:40:08 pm
 * Copyright © 2021 My Custom Life
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { ComponentsModule } from '@life-components/components.module';
import { CoreModule } from '@life-store/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
    HttpClientModule,
    CoreModule,
  ],
  declarations: [SignUpPage],
})
export class SignUpPageModule {}
