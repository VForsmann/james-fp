import { TestBed, inject } from '@angular/core/testing';

import { SharedBookService } from './shared-book.service';

xdescribe('SharedBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedBookService]
    });
  });

  it('should be created', inject([SharedBookService], (service: SharedBookService) => {
    expect(service).toBeTruthy();
  }));
});
