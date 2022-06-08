import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookAddService {

  
  constructor(private http:HttpClient) { }


  public createBook(book: Book): Observable<Object>{
    console.log(book);
    return this.http.post("http://localhost:8080/books/",book);
  }


  public getBooks(){
    return this.http.get("http://localhost:8080/books/");
  }

}
