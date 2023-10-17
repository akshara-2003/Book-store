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
interface cartItem{
  product : Product,
  quantity :number
}
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() Item : cartItem|undefined;
  @Output() removeFromCart :EventEmitter<any> = new EventEmitter();
  @Output() increaseQuantity :EventEmitter<any> = new EventEmitter();
  @Output() decreaseQuantity :EventEmitter<any> = new EventEmitter();

  removeProduct(id:number){
      this.removeFromCart.emit(id)
  }
  increase(item:cartItem){
    this.increaseQuantity.emit(item);
  }
  decrease(item:cartItem){
    this.decreaseQuantity.emit(item);
  }
}
