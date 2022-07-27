import {of} from "rxjs";

export const mockRouter: any = {
  navigate: jasmine.createSpy('navigate'),
  url: 'http://testhost/1',
  events: of({})
};

export const mockActivatedRoute: any = {
  snapshot: {
    paramMap: {
      get: jasmine.createSpy('get').and.returnValue('1')
    }
  }
};
