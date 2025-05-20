import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'rb-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = {
      name: ingName,
      amount: ingAmount
    };
    this.slService.addIngredient(newIngredient);
  }
}
