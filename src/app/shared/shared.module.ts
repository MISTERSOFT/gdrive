import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './layout';
import { RecentOpenedFilesComponent } from './recent-opened-files/recent-opened-files.component';
import { TileFileComponent, TileFolderComponent } from './tiles';

@NgModule({
  declarations: [
    RecentOpenedFilesComponent,
    TileFolderComponent,
    TileFileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    RecentOpenedFilesComponent,
    TileFolderComponent,
    TileFileComponent
  ]
})
export class SharedModule { }
