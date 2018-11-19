import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: 'menu-lateral.component.html',
  styleUrls: ['menu-lateral.component.scss']
})

export class MenuLateralComponent implements OnInit {
  @ViewChild(MatMenuTrigger) $matMenuTrigger: MatMenuTrigger;
  constructor() { }
  ngOnInit() { }
  openAddMenu() {
    this.$matMenuTrigger.openMenu();
  }
}
