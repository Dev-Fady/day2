import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Products } from '../products/products';

@Component({
  selector: 'app-order',
  imports: [FormsModule,CommonModule,Products],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order implements AfterViewInit {
    categories:Icategory[];
    myDate:Date = new Date();
    selectedCategory: Icategory | null = null;

    totalOderPrice:number = 0;

  @ViewChild('myInput') myInput!:ElementRef  // non null assertion operator 
  @ViewChild(Products) productsComponent!:Products;

    constructor() {
      this.categories = [
      {id:1, name:'Mobile'},
      {id:2, name:'Laptop'},
      {id:3, name:'Accessories'},
    ]
    }
  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = "Ahmed";
    console.log(this.productsComponent.totalOderPrice);
  }
}
