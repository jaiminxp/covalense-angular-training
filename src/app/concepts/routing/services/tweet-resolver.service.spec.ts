import { TestBed } from '@angular/core/testing';

import { TweetResolverService } from './tweet-resolver.service';

describe('TweetResolverService', () => {
  let service: TweetResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweetResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
