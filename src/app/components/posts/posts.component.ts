import {Component, OnInit} from "@angular/core";
import {PostService} from "../../services/post.service";
import {debounceTime, distinctUntilChanged, forkJoin, map, Observable, OperatorFunction, takeUntil} from "rxjs";
import {PostModel} from "../../model/post.model";
import {UserModel} from "../../model/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentsModel} from "../../model/comments.model";
import {BaseComponent} from "../base.component";

@Component({
  selector: 'posts',
  styles: ['.accordion-button:after {display: none;}'],
  templateUrl: './posts.component.html'
})
export class PostsComponent extends BaseComponent implements OnInit {

  allPosts: PostModel[] = [];
  users: UserModel[] = [];
  mergedPostsAndUser: any = [];
  paginatedPosts: any = [];
  usernames: string[] = [];
  comments: CommentsModel[] = [];

  searchedUser: any = '';

  page: number = 1;
  pageSize: number = 10;


  constructor(private service: PostService,
              private route: ActivatedRoute,
              private router: Router) {
    super();
  }

  ngOnInit(): void {
    const observable = forkJoin([
      this.service.getPosts(''),
      this.service.getUsers()
    ])
    observable.pipe(takeUntil(this.ngUnsubscribe)).subscribe(resp => {
      this.allPosts = resp[0];

      this.users = resp[1];
      this.users.forEach(user => {
        this.usernames.push(user.username);
      })

      this.mergedPostsAndUser = this.allPosts.map(post => {
        let username = this.users.find(user => user.id === post.userId)
        return {...post, username}
      });


      this.paginatedPosts = this.mergedPostsAndUser.slice(0, this.pageSize);
    });
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(user => user.length < 2 ? []
        : this.usernames.filter(v => v.toLowerCase().indexOf(user.toLowerCase()) > -1).slice(0, 10))
    )

  onPageChange(): void {
    this.paginatedPosts = this.mergedPostsAndUser.slice(((this.page - 1) * this.pageSize), (((this.page - 1)  * this.pageSize) + this.pageSize))
  }

  onDetailsButtonClick(postId: string): void {
    this.router.navigate(['/post/' + postId], {relativeTo: this.route})
   }

  onInputChange(): void {
    if (this.searchedUser !== "") {
      let searchValue = this.searchedUser.toLowerCase();
      this.mergedPostsAndUser = this.mergedPostsAndUser.filter((post: { username: { username: string; }; }) => {
        return post.username.username.toLowerCase().match(searchValue)
      })
    } else {
      this.ngOnInit();
    }
  }

  onShortDetailClick(postId: string): void {
    this.service.getComments(postId).pipe(takeUntil(this.ngUnsubscribe)).subscribe(resp => {
      this.comments = resp;
    })

  }
}
