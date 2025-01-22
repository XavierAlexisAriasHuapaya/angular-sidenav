import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent),
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('../dashboard/dashboard.component').then(c => c.DashboardComponent)
            },
            {
                path: 'maintenance',
                loadChildren: () => import('../maintenance/maintenance.routes').then(r => r.routes)
            }
        ]
    },
];
