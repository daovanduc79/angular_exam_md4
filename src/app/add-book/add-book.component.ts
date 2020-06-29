import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  public bookForm: FormGroup;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: ['Nam Cao', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    })
  }

  onSubmit() {
    
    // if(this.bookForm.valid){
      const book = this.bookForm.value;
      
      this.bookService.create(book).subscribe( next =>{
        console.log(next);
        this.bookForm.reset({
          title: '',
          description: ''
        });
        this.router.navigate(['']);
        alert('them moi thanh cong');
      }, error => {console.log(error)});
    
  }
}
