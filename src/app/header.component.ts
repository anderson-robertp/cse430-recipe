import { Output } from "@angular/core";
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'rb-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
