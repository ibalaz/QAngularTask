import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./components/posts/posts.component";
import {DetailsComponent} from "./components/details/details.component";
import {PageNotFoundComponent} from "./components/pageNotFound/pageNotFound.component";

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: DetailsComponent},
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
