import { TestComponentBuilder } from '@angular/compiler/testing';
import { Component, provide } from '@angular/core';
import {
  beforeEachProviders,
  describe,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { Blog } from './blog.component';

describe('Blog', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Blog
  ]);

  it('should log ngOnInit', inject([ Blog ], (blog) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    blog.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
