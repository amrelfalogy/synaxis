import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  isVisible: boolean = false;

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
}
