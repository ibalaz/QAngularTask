import {of} from "rxjs";

export const mockHttpClient: any = {
  get: jasmine.createSpy('get').and.returnValue(of({
    data: {}
  }))
}
