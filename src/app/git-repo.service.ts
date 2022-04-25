import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';  
import { Github } from './github';

@Injectable({
  providedIn: 'root'
})
export class GitRepoService {
  private username = 'Charity'


  constructor(private http:HttpClient) {
    console.log ('GitHub Service Started');
   }
  getUser(){
    return this.http.get('https://api.github.com/users/'+this.username);
  }

  getRepos (){
    return this.http.get('https://api.github.com/users/'+this.username+'/repos' );
  }

  updateUsername(username: any){
    this.username = username
  }
  

}
