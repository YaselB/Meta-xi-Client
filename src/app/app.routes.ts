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
    
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./components/glasses/glasses.component').then(
        (m) => m.TasksComponent
      ),
      },
  {
    path: 'team',
    loadComponent: () =>
      import('./components/team/team.component').then((m) => m.TeamComponent),
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
      },
  {
    path: 'me',
    loadComponent: () =>
      import('./components/me/me.component').then((m) => m.MeComponent),
      },
  {
    path: 'recharge',
    loadComponent: () =>
      import('./common/recharge/recharge.component').then(
        (m) => m.RechargeComponent
      ),
        },
  {
    path: 'withdraw/:token',
    loadComponent: () =>
      import('./common/withdraw/withdraw.component').then(
        (m) => m.WithdrawComponent
      ),
        },
  {
    path: 'withdrawToken',
    loadComponent: () =>
      import('./common/withdrawToken/withdrawToken.component').then(
        (m) => m.WithdrawTokenComponent
      ),
        },
  {
    path: 'account',
    loadComponent: () =>
      import('./components/me/account/account.component').then(
        (m) => m.AccountComponent
      ),
        },
  {
    path: 'password',
    loadComponent: () =>
      import('./components/me/changepass/changepass.component').then(
        (m) => m.ChangepassComponent
      ),
        },
  {
    path: 'deposit/:token',
    loadComponent: () =>
      import('./common/deposit/deposit.component').then(
        (m) => m.DepositComponent
      ),
        },{
    path: 'nequi/:token',
    loadComponent: ()=>
      import('./common/deposit/address/nequi-confirmation/nequi-confirmation.component').then(
        (m) => m.NequiConfirmationComponent
      ),
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
