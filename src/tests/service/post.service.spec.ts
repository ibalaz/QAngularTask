import {MockService} from "../stubs/mock.service";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../app/services/post.service";
import {TestBed} from "@angular/core/testing";

describe('PostService', () => {
  const mockServices = new MockService();

  let httpClient: HttpClient;
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: mockServices.getMockService('HttpClient')}
      ]
    })
    httpClient = TestBed.inject(HttpClient);

    service = new PostService(httpClient);
  })

  it('should get posts', () => {
    // given
    let postId = '1';

    // when
    service.getPosts(postId);

    // then
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('should get users', () => {
    // when
    service.getUsers();

    // then
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('should get comments', () => {
    // given
    let id = '1';

    // when
    service.getComments(id);

    // then
    expect(httpClient.get).toHaveBeenCalled();
  })

});
