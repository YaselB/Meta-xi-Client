import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    canActivate: [authGuard],
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./components/glasses/glasses.component').then(
        (m) => m.TasksComponent
      ),
    canActivate: [authGuard]
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./components/team/team.component').then((m) => m.TeamComponent),
    canActivate: [authGuard]
  },
  {
    path: 'lvl/:lvl',
    loadComponent: () =>
      import(
        './components/team/components/level/account/account.component'
      ).then((c) => c.AccountComponent),
      canActivate: [authGuard]
  },
  {
    path: 'vip',
    loadComponent: () =>
      import('./components/vip/vip.component').then((m) => m.VipComponent),
    canActivate: [authGuard]
  },
  {
    path: 'me',
    loadComponent: () =>
      import('./components/me/me.component').then((m) => m.MeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'recharge',
    loadComponent: () =>
      import('./common/recharge/recharge.component').then(
        (m) => m.RechargeComponent
      ),
      canActivate: [authGuard]
  },
  {
    path: 'withdraw/:token',
    loadComponent: () =>
      import('./common/withdraw/withdraw.component').then(
        (m) => m.WithdrawComponent
      ),
      canActivate: [authGuard]
  },
  {
    path: 'withdrawToken',
    loadComponent: () =>
      import('./common/withdrawToken/withdrawToken.component').then(
        (m) => m.WithdrawTokenComponent
      ),
      canActivate: [authGuard]
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./components/me/account/account.component').then(
        (m) => m.AccountComponent
      ),
      canActivate: [authGuard]
  },
  {
    path: 'password',
    loadComponent: () =>
      import('./components/me/changepass/changepass.component').then(
        (m) => m.ChangepassComponent
      ),
      canActivate: [authGuard]
  },
  {
    path: 'deposit/:token',
    loadComponent: () =>
      import('./common/deposit/deposit.component').then(
        (m) => m.DepositComponent
      ),
      canActivate: [authGuard]
  },{
    path: 'nequi/:token',
    loadComponent: ()=>
      import('./common/deposit/address/nequi-confirmation/nequi-confirmation.component').then(
        (m) => m.NequiConfirmationComponent
      ),
      canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
