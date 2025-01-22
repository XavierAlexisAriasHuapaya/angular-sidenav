import { Routes } from '@angular/router';
import { CurrencyListComponent } from './feature/currency/currency-list/currency-list.component';
import { CountryListComponent } from './feature/country/country-list/country-list.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./feature/main/main.component').then(c => c.MainComponent),
        children: [
            {
                path: 'country',
                component: CountryListComponent
            },
            {
                path: 'currency',
                component: CurrencyListComponent
            }
        ]
    }
];
