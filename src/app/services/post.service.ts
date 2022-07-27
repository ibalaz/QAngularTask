import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {PostModel} from "../model/post.model";
import {UserModel} from "../model/user.model";
import {CommentsModel} from "../model/comments.model";


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  userUrl = 'https://jsonplaceholder.typicode.com/users';
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {
  }

  getPosts(postId: string): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.postUrl + '/' + postId);
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.userUrl)
  }

  getComments(id: string): Observable<CommentsModel[]> {
    return this.http.get<CommentsModel[]>(this.commentsUrl, {params: new HttpParams().append("postId", id)});
  }

}
