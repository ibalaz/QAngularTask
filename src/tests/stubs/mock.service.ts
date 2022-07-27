import {PostService} from "../../app/services/post.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

import {mockPostService} from "./services/mockPostService";
import {mockHttpClient} from "./services/mockHttpClient";
import {mockActivatedRoute, mockRouter} from "./services/mockRouter";

export class MockService {
  private mockServices: any = [];
  private  services: any = [];

  constructor() {
    this.services['PostService'] = PostService;
    this.services['HttpClient'] = HttpClient;
    this.services['Router'] = Router;
    this.services['ActivatedRoute'] = ActivatedRoute;

    this.mockServices['PostService'] = mockPostService;
    this.mockServices['HttpClient'] = mockHttpClient;
    this.mockServices['Router'] = mockRouter;
    this.mockServices['ActivatedRoute'] = mockActivatedRoute;
  }

  public getMockService(name: string): any {
    if (this.mockServices[name]) {
      return this.mockServices[name];
    } else {
      throw new Error('Mocked service not found by provided name ' + name);
    }
  }

  public getService(name: string): any {
    if (this.services[name]) {
      return this.services[name];
    } else {
      throw new Error('Service not found by provided name ' + name);
    }
  }
}
