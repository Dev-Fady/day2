import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Products } from './components/products/products';
import { Order } from './components/order/order';

@Component({
  selector: 'app-root',
  imports: [ Header, Products, Footer, Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('day2');
}
