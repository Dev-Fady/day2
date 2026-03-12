import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../directives/highlight-card';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products:Iproduct[];
  categories:Icategory[];

  totalOderPrice:number = 0;

  selectedCategory: Icategory | null = null;


  constructor() {
    this.products = [
      {
        id: 1,
        name: 'iPhone 14 Pro',
        price: 42000,
        quantity: 1,
        imgUrl: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c',
        catId: 1
      },
      {
        id: 2,
        name: 'Samsung Galaxy S23',
        price: 35000,
        quantity: 15,
        imgUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
        catId: 1
      },
      {
        id: 3,
        name: 'Dell Inspiron 15',
        price: 28000,
        quantity: 7,
        imgUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed',
        catId: 2
      },
      {
        id: 4,
        name: 'HP Pavilion',
        price: 26000,
        quantity: 5,
        imgUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
        catId: 2
      },
      {
        id: 5,
        name: 'Sony Headphones',
        price: 4500,
        quantity: 20,
        imgUrl: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd',
        catId: 3
      },
      {
        id: 6,
        name: 'Logitech Wireless Mouse',
        price: 850,
        quantity: 30,
        imgUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3',
        catId: 3
      },
      {
        id: 2,
        name: 'Samsung Galaxy S23',
        price: 35000,
        quantity: 15,
        imgUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
        catId: 1
      },
      {
        id: 3,
        name: 'Dell Inspiron 15',
        price: 28000,
        quantity: 0,
        imgUrl: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed',
        catId: 2
      },
      {
        id: 4,
        name: 'HP Pavilion',
        price: 26000,
        quantity: 5,
        imgUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
        catId: 2
      },
      {
        id: 1,
        name: 'iPhone 14 Pro',
        price: 42000,
        quantity: 10,
        imgUrl: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c',
        catId: 1
      },
      {
        id: 2,
        name: 'Samsung Galaxy S23',
        price: 35000,
        quantity: 15,
        imgUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
        catId: 1
      },
    ];

    this.categories = [
      {id:1, name:'Mobile'},
      {id:2, name:'Laptop'},
      {id:3, name:'Accessories'},
    ]
  }

  buy(count:string, product:Iproduct){
    const quantity = +count;
    
    if (quantity <= 0 || quantity > product.quantity) {
    alert('Invalid quantity');
    return;
  }
    // this.totalOderPrice += parseInt(count) * price;
    // this.totalOderPrice += Number(count) * price;
    this.totalOderPrice += quantity * product.price;
    
    product.quantity -= quantity;
  }

  get filteredProducts(): Iproduct[]{
    if(!this.selectedCategory) return this.products;

    return this.products.filter(p => p.catId === this.selectedCategory?.id);
  }

  trackItem(index:number, item:Iproduct){
    return item.id;
  }
}
