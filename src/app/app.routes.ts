import { Routes } from '@angular/router';
import { Login } from './features/auth/pages/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/features/auth/pages/auth.routes').then((route) => route.authRoutes),
  },
  {
    path: 'superadmin',
    loadChildren: () =>
      import('../app/features/superadmin/super-admin.routes').then(
        (route) => route.superadminRoutes,
      ),
  },
];
