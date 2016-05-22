import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AppComponent } from '../app/michaelfrohberg.component';

beforeEachProviders(() => [AppComponent]);

describe('App: Michaelfrohberg', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'michaelfrohberg works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('michaelfrohberg works!');
  }));
});
