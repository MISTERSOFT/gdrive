import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ClassOnHoverDirective, MenuLateralComponent, MenuTopComponent } from './layout';

@NgModule({
  declarations: [
    MenuTopComponent,
    MenuLateralComponent,
    ClassOnHoverDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MenuTopComponent,
    MenuLateralComponent
  ]
})
export class CoreModule { }
