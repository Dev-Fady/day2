import { Component, EventEmitter, Input, Output,} from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../directives/highlight-card';
import { StaticProducts } from '../../services/static-products';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products:Iproduct[];


  @Input() selectedCategory: Icategory | null = null;
  totalOderPrice:number = 0;
  @Output() totalPriceChanged = new EventEmitter<number>();
  
  constructor(private _staticProducts: StaticProducts) {
    this.products = this._staticProducts.products;
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

    // Emit the updated total price to the parent component
    this.totalPriceChanged.emit(this.totalOderPrice);
  }

  get filteredProducts(): Iproduct[]{
    // if(!this.selectedCategory) return this.products;

    // return this.products.filter(p => p.catId === this.selectedCategory?.id);
    this._staticProducts.selectedCategory = this.selectedCategory;
    return this._staticProducts.filteredProducts;
  }

  trackItem(index:number, item:Iproduct){
    return item.id;
  }
}
