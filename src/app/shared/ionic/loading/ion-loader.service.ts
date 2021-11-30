

/*
 * File: auth.service.ts
 * Project: LIFE
 * Created: Thursday, 25th November 2021 6:47:38 pm
 * Last Modified: Tuesday, 30th November 2021 7:30:08 am
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class IonLoaderService {

    constructor(private loadingController: LoadingController) { }

    // Simple loader
    simpleLoader() {
        this.loadingController.create({
            message: 'Loading...'
        }).then((response) => {
            response.present();
        });
    }

    // Dismiss loader
    dismissLoader() {
        this.loadingController.dismiss().then((response) => {
            console.log('Loader closed!', response);
        }).catch((err) => {
            console.log('Error occured : ', err);
        });
    }
}
