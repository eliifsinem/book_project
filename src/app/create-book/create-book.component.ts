import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookAddService } from '../book-add.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: Book =new Book();
  message:any;

  constructor(private BookAddService:BookAddService) { }

  ngOnInit(): void {
  }
  

  createNow(){
    let resp=this.BookAddService.createBook(this.book);
    resp.subscribe((data)=>this.message=data);
  }

}
