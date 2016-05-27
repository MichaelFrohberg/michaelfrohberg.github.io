// App
export * from './app.component';
export * from './app.service';
export * from './routes';
export * from './shared/index';

import { AppState } from './app.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];
