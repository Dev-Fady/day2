import { Component } from '@angular/core';
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
export class Order {
    categories:Icategory[];
    myDate:Date = new Date();
    selectedCategory: Icategory | null = null;

    totalOderPrice:number = 0;



    constructor() {
      this.categories = [
      {id:1, name:'Mobile'},
      {id:2, name:'Laptop'},
      {id:3, name:'Accessories'},
    ]
    }
}
