import { TestBed } from '@angular/core/testing';

import { TransactionOfxService } from './transaction-ofx.service';

describe('TransactionOfxService', () => {
  let service: TransactionOfxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionOfxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
