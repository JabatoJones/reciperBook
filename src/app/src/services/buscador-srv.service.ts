import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorSrvService {

  constructor(private http: HttpClient) { }

  /**
   * findReciper is a basic Search Method 
   * @param inputText 
   */
  findReciper(inputText): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    return this.http.post('http://www.recipepuppy.com/api/?i='+inputText+'&q=omelet&p=1', {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
         "Access-Control-Allow-Origin": "*",
      }
    })
  };
}
