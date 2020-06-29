import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { IBook } from '../i-book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  public bookForm: FormGroup;
  public book: IBook;
  private id: number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private bookService: BookService
  ) { }

  ngOnInit() {
    
    this.id = +this.route.snapshot.paramMap.get('id');
    
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    })

    this.bookService.getBookById(this.id).subscribe(next => {
      this.book = next;
      this.bookForm.patchValue(this.book);
    }, error => {console.log(error)});
  }

  onSubmit(){
    // if(this.bookForm.valid){
      const book = this.bookForm.value;
      console.log(this.bookForm);
      console.log(this.id);

      this.bookService.update(book, this.id).subscribe(next => {
        console.log(next);
        alert('cap nhat thanh cong');
        this.router.navigate(['']);
      }, error => {console.log(error)}); 
    
  }

}
