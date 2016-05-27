import { Routes } from '@ngrx/router';
import { Home } from './home';
import { About } from './about';

export const routes: Routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]
