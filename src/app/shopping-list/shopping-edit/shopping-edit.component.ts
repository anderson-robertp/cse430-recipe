import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rb-shopping-edit',
  standalone: false,
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>();

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = {
      name: ingName,
      amount: ingAmount
    };
    this.ingredientAdded.emit(newIngredient);
  }
}
