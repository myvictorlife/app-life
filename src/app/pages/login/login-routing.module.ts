import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('../forgot-password/forgot-password.module').then((m) => m.ForgotPasswordPageModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('../sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
