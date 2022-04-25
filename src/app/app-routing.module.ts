import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitProfileComponent } from './git-profile/git-profile.component';
import { GitRepositoriesComponent } from './git-repositories/git-repositories.component';

const routes: Routes = [
  { path: "git-profile", component:GitProfileComponent}, 
  {path: "git-repositories", component: GitRepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
