import { Component, OnInit } from '@angular/core';
import { GitprofileService } from '../gitprofile.service';
import { Github } from '../github';
@Component({
  selector: 'app-git-profile',
  templateUrl: './git-profile.component.html',
  styleUrls: ['./git-profile.component.css'],
  providers: [GitprofileService]
})
export class GitProfileComponent implements OnInit {
  user: any;
  username: any;

  constructor(private _githubService: GitprofileService) { 
    this._githubService.getUser().subscribe(user => {
      this.user = user;
      // console.log (this.user);
    });
    this._githubService.getUser().subscribe(user => {
      this.user = user;
      // console.log (this.user);
    });
  }

  ngOnInit(): void {
  }

}
