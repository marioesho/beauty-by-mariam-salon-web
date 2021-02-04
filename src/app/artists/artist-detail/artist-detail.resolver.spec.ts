import { TestBed } from '@angular/core/testing';

import { ArtistDetailResolver } from './artist-detail.resolver';

describe('ArtistDetailResolver', () => {
  let resolver: ArtistDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ArtistDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
