import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Product{
  id:number,
  title: string,
  author: string,
  description: string,
  image: string,
  price: {
    currency:string,
    value:number,
    displayValue:string
  }
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: Product|undefined;
  @Output() addProduct:EventEmitter<any> = new EventEmitter();


  addToCart(product: Product){

    this.addProduct.emit(product)
  }
}
