import { Component, OnInit } from '@angular/core';
import { GitprofileService } from '../gitprofile.service';
import { Github } from '../github';
import { GitRepoService } from '../git-repo.service';

@Component({
  selector: 'app-git-repositories',
  templateUrl: './git-repositories.component.html',
  styleUrls: ['./git-repositories.component.css'],
  providers: [GitRepoService]
})
export class GitRepositoriesComponent implements OnInit {
  user: any;
  repos: any;
  username: any;

  constructor(private _githubService: GitRepoService) {
    this._githubService.getUser().subscribe(user=>{
      this.user = user;

    })

    this._githubService.getRepos().subscribe(repos=>{
      this.repos = repos;

    });
   }
  search (){
    this._githubService.updateUsername(this.username);
    this._githubService.getUser().subscribe(user=>{
      this.user = user
    });

    this._githubService.getRepos().subscribe(repos=>{
      this.repos = repos
    });
  }

  ngOnInit(): void {
  }

}
