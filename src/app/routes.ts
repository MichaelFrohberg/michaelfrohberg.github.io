import { Routes } from '@ngrx/router/es6';
import { Home } from './home';
import { Blog } from './blog';
import { Projects } from './projects';

export const routes: Routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/projects',
        component: Projects
    }
];
