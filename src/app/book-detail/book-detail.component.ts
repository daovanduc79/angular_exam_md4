import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '../i-book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public book: IBook;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(id).subscribe(next => {
      this.book = next;
      console.log(next);
    }, error => {console.log(error)});
  }

}
