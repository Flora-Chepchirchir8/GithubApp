import { TestBed } from '@angular/core/testing';

import { GitSerch.ServiceService } from './git-serch.service.service';

describe('GitSerch.ServiceService', () => {
  let service: GitSerch.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitSerch.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
