import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post.service";
import {CommentsModel} from "../../model/comments.model";
import {forkJoin, takeUntil} from "rxjs";
import {BaseComponent} from "../base.component";

@Component({
  selector: 'post-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent extends BaseComponent implements OnInit  {

  post: any = {};
  comments: CommentsModel[] = []

  constructor(private service: PostService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId != null) {
      let observable = forkJoin([
        this.service.getPosts(postId),
        this.service.getComments(postId)
      ])
      observable.pipe(takeUntil(this.ngUnsubscribe)).subscribe(resp => {
        this.post = resp[0];
        this.comments = resp[1];
      })
    } else {
      console.error('You must send id in url /post/{id}');
    }
  }

  onBackButtonClick(): void {
    this.router.navigate(['/posts']);
  }

}
