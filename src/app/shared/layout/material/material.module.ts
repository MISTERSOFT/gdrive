import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [],
  exports: [
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatSortModule,
    MatTableModule,
  ],
})
export class MaterialModule { }
