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
