import {MockService} from "../../stubs/mock.service";
import {TestBed} from "@angular/core/testing";
import {PostService} from "../../../app/services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsComponent} from "../../../app/components/posts/posts.component";

describe('DetailsComponent', () => {
  const mockServices = new MockService();

  let service: PostService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let component: PostsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: PostService, useValue: mockServices.getMockService('PostService')},
        {provide: Router, useValue: mockServices.getMockService('Router')},
        {provide: ActivatedRoute, useValue: mockServices.getMockService('ActivatedRoute')}
      ]
    })
    service = TestBed.inject(PostService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);

    component = new PostsComponent(service, activatedRoute, router);
  })

  it('should be initialized correctly', () => {
    // when
    component.ngOnInit();

    // then
    expect(component).toBeDefined();
  })

  it('should call ngOnInit when empty event is passed in onInputChange', () => {
    // when
    spyOn(component, 'ngOnInit');
    component.onInputChange();

    // then
    expect(component.ngOnInit).toHaveBeenCalled();
  })


  it('should call router navigate when onDetailsButtonClick', () => {
    // when
    component.ngOnInit();
    component.onDetailsButtonClick('1');

    // then
    expect(router.navigate).toHaveBeenCalled();
  })

  it('should getComments onShortDetailClick', () => {
    // when
    component.ngOnInit();
    component.onShortDetailClick('1');

    // then
    expect(service.getComments).toHaveBeenCalledWith('1');
  })
})
