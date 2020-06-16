import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] =[
    {
      sku: "text-100",
      name: "Python for SAS Users",
      description: "Business users familiar with Base SAS programming can now learn Python.",
      unitPrice: 600,
      imageUrl: "assets/images/webdevelopment/text-100.jpg",
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: "text-101",
      name: "Deep Learning with JavaScript",
      description: "Deep learning has transformed the fields of computer vision.",
      unitPrice: 500,
      imageUrl: "assets/images/webdevelopment/text-101.jpg",
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    },
    {
      sku: "text-102",
      name: "Clean Ruby",
      description: "Learn how to make better decisions and write cleaner Ruby code. ",
      unitPrice: 700,
      imageUrl: "assets/images/webdevelopment/text-102.jpg",
      active: true,
      unitsInStock: 100,
      createdOn: new Date(),
      updatedOn: null,
    }
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
