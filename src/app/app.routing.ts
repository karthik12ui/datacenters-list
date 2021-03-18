
import { MainComponent } from './main/main.component';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent, children: [
            {
                path: '',
                loadChildren: () => import('./main/initialize/initialize.module').then(m => m.InitializeModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'shared',
                loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
            }
        ]
    },
    { path: '**', redirectTo: 'shared/page-not-found' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, {
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    useHash: true
});