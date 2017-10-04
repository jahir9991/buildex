import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));
});
