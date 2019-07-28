import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostDetail } from './postdetail';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  
   private posturl= 'http://localhost:50119/api/PostDetails';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getPosts(): Observable<PostDetail[]> {
    //httpOptions.headers.append('Access-Control-Allow-Origin', 'http://localhost:50119/');
    return this.http.get<PostDetail[]>(this.posturl)
      .pipe(
        tap(_ => this.log('fetched employees')),
        catchError(this.handleError<PostDetail[]>('getPosts', []))
      );
  }
  getPost(id: number): Observable<PostDetail> {
    const url = `${this.posturl}/${id}`;
    return this.http.get<PostDetail>(url).pipe(
      tap(_ => this.log(`fetched post id=${id}`)),
      catchError(this.handleError<PostDetail>(`getPost id=${id}`))
    );
  }
   addPost (postdetail: PostDetail): Observable<PostDetail> {
     console.log(postdetail);
      return this.http.post<PostDetail>(this.posturl, postdetail, httpOptions).pipe(
        tap((newPost: PostDetail) => this.log(`added hero w/ id=${newPost.id}`)),
        catchError(this.handleError<PostDetail>('addPost'))
      );
 }


  
    deletePost (hero: PostDetail | number): Observable<PostDetail> {
      //alert(hero);
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.posturl}/${id}`;

 
    return this.http.delete<PostDetail>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted post id=${id}`)),
      catchError(this.handleError<PostDetail>('deleteHero'))
    );
  }
 
  /** PUT: update the hero on the server */
  updatePost (hero: PostDetail): Observable<any> {
    const url = `${this.posturl}/${hero.id}`;
   // console.log(url);
  // console.log(hero);
    return this.http.put(url, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {


      console.error(error);


      this.log(`${operation} failed: ${error.message}`);


      return of(result as T);
    };
  }


  private log(message: string) {
    this.messageService.add(`PostService: ${message}`);
  }

}