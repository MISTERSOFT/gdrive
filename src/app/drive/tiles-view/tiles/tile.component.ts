import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: ''
})
export abstract class TileComponent {
  @Input() data: string;
  @HostListener('click') onClick() {
    console.log('CLICK');
    this.isSelected = !this.isSelected;
  }
  protected isSelected: boolean;
  constructor() { }
}
