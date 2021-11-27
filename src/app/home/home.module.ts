/*
 * File: home.module.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Saturday, 27th November 2021 10:16:08 am
 * Copyright © 2021 My Custom Life
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from '@life-store/core.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, CoreModule],
  providers: [StoreModule],
  declarations: [HomePage],
})
export class HomePageModule {}
