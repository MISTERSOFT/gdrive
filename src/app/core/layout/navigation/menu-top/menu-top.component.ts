import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: 'menu-top.component.html',
  styleUrls: ['menu-top.component.scss']
})

export class MenuTopComponent implements OnInit {
  isSearchBarFocus = false;

  documents = [
    { id: 1, name: 'Document 1', type: 1 },
    { id: 2, name: 'Document 2', type: 2 },
    { id: 3, name: 'Document 3', type: 3 },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleSearchbarFocus(e) { this.isSearchBarFocus = !this.isSearchBarFocus; }
}
