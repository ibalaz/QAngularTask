import {MockService} from "../../stubs/mock.service";
import {PostService} from "../../../app/services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DetailsComponent} from "../../../app/components/details/details.component";
import {TestBed} from "@angular/core/testing";

describe('DetailsComponent', () => {
  const mockServices = new MockService();

  let service: PostService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let component: DetailsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: PostService, useValue: mockServices.getMockService('PostService')},
        {provide: ActivatedRoute, useValue: mockServices.getMockService('ActivatedRoute')},
        {provide: Router, useValue: mockServices.getMockService('Router')},
      ]
    })
    service = TestBed.inject(PostService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);

    component = new DetailsComponent(service, activatedRoute, router);
  })

  it('should be initialized correctly', () => {
    // when
    component.ngOnInit();

    // then
    expect(component).toBeDefined();
  })

  it('should call router navigate when onBackButtonClick is called', () => {
    // when
    component.onBackButtonClick();

    // then
    expect(router.navigate).toHaveBeenCalled();
  })
})
