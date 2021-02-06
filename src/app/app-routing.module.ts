import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule)
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./edit/heroes-edit.module')
        .then(m => m.HeroEditModule)
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heroes/heroes.module')
        .then(m => m.HerosModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule)
  },
  {
    path: '**',
    redirectTo: '/'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
