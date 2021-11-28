/*
 * File: auth.guard.service.ts
 * Project: LIFE
 * Created: Sunday, 28th November 2021 8:31:44 am
 * Last Modified: Sunday, 28th November 2021 12:20:33 pm
 * Copyright © 2021 My Custom Life
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAuth } from '@life-store/auth/auth.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private store: Store) {}

    canActivate(): | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return new Promise<boolean>((resolve) => {
            const state$ = this.store.select(selectAuth);
            state$.subscribe((state) => {
                if (!state || state?.operationType !== 'signIn') {
                    this.router.navigate(['login']);
                }
                resolve(true);
            });
        });
    }
}
