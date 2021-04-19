import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from "./post-details/post-details.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'post', component: PostDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
