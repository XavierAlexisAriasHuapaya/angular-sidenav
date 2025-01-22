import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        loadChildren: () => import('./shared/layout.routes').then(r => r.routes)
    }
    // {
    //     path: 'main',
    //     loadComponent: () => import('./shared/layout/layout.component').then(c => c.LayoutComponent),
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: 'dashboard',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: 'dashboard',
    //             loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent)
    //         },
    //         {
    //             path: 'maintenance',
    //             loadChildren: () => import('./maintenance/maintenance.routes').then(r => r.routes)
    //         }
    //     ]
    // },


    // {
    //     path: 'products',
    //     loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent),
    //     children: [
    //         {
    //             path: 'level2.1',
    //             loadComponent: () => import('./products/product-level-two-one/product-level-two-one.component').then(m => m.ProductLevelTwoOneComponent),
    //         }
    //     ]
    // },
    // {
    //     path: 'products',
    //     loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent),
    //     children: [
    //         {
    //             path: 'level2.1',
    //             loadComponent: () => import('./products/product-level-two-one/product-level-two-one.component').then(m => m.ProductLevelTwoOneComponent),
    //         },
    //         {
    //             path: 'level2.1',
    //             loadComponent: () => import('./products/product-level-two-one/product-level-two-one.component').then(m => m.ProductLevelTwoOneComponent),
    //         },
    //         {
    //             path: 'level3.1',
    //             loadComponent: () => import('./products/product-level-three-one/product-level-three-one.component').then(m => m.ProductLevelThreeOneComponent),
    //         },
    //         {
    //             path: 'level3.2',
    //             loadComponent: () => import('./products/product-level-three-two/product-level-three-two.component').then(m => m.ProductLevelThreeTwoComponent),
    //         },
    //         {
    //             path: 'level1.2',
    //             loadComponent: () => import('./products/product-level-one-two/product-level-one-two.component').then(m => m.ProductLevelOneTwoComponent),
    //         }
    //     ]
    // },
    // {
    //     path: 'statistics',
    //     component: StatisticsComponent
    // },
    // {
    //     path: 'coupens',
    //     loadComponent: () => import('./coupens/coupens.component').then(m => m.CoupensComponent),
    //     children: [
    //         {
    //             path: 'list',
    //             loadComponent: () => import('./coupens/coupen-list/coupen-list.component').then(m => m.CoupenListComponent),
    //         }
    //     ]
    // },
    // {
    //     path: 'pages',
    //     component: PagesComponent
    // },
    // {
    //     path: 'media',
    //     component: MediaComponent
    // },
    // {
    //     path: 'settings',
    //     component: SettingsComponent
    // }
];
