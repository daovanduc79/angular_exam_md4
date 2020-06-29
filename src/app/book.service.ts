import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from './i-book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private readonly API = 'http://localhost:3000/books';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllBooks(): Observable<IBook[]>{
    return this.httpClient.get<IBook[]>(this.API);
  }

  getBookById(id: number): Observable<IBook>{
    return this.httpClient.get<IBook>(`${this.API}/${id}`);
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  create(book: IBook): Observable<IBook>{
    return this.httpClient.post<IBook>(this.API, book);
  }

  update(book: IBook): Observable<IBook>{
    return this.httpClient.put<IBook>(`${this.API}/${book.id}`, book);
  }
}
