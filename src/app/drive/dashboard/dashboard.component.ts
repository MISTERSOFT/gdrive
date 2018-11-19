import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
