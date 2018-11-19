import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [],
  exports: [
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MaterialModule { }
