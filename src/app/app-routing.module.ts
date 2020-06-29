import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BooksComponent
  },
  {
    path: 'book/add',
    component: AddBookComponent
  },
  {
    path: 'book/edit/:id',
    component: EditBookComponent
  },
  {
    path: 'book/detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
