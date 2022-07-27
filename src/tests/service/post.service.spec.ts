import {MockService} from "../stubs/mock.service";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../app/services/post.service";
import {TestBed} from "@angular/core/testing";

describe('PostService', () => {
  const mockServices = new MockService();

  let httpClient: HttpClient;
  let postService: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: HttpClient, useValue: mockServices.getMockService('HttpClient')}
      ]
    })
    httpClient = TestBed.get(HttpClient);

    postService = new PostService(httpClient);
  })

  it('should get posts', () => {
    // given
    let postId = '1';

    // when
    postService.getPosts(postId);

    // then
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('should get users', () => {
    // when
    postService.getUsers();

    // then
    expect(httpClient.get).toHaveBeenCalled();
  })

  it('should get comments', () => {
    // given
    let id = '1';

    // when
    postService.getComments(id);

    // then
    expect(httpClient.get).toHaveBeenCalled();
  })

});
