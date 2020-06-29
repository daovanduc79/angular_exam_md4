import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../i-book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: IBook[];

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(next => {
      this.books = next;
    }, error => { console.log(error) });
  }

  deleteBook(id: number) {

    const book = this.books[id];

    this.bookService.delete(id).subscribe(()=>{
      this.books = this.books.filter(t => t.id !== book.id);
      alert('xoa thanh cong!!!');
    }, error => {console.log(error)});
  }
}
