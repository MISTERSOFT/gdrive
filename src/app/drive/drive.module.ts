import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { DriveRoutingModule } from './drive-routing.module';
import { DriveComponent } from './drive.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TileFileComponent, TileFolderComponent } from './tiles-view/tiles';
import { TilesViewComponent } from './tiles-view/tiles-view.component';

@NgModule({
  declarations: [
    DriveComponent,
    TilesViewComponent,
    TileFolderComponent,
    TileFileComponent,
    ListViewComponent,
  ],
  imports: [
    DriveRoutingModule,
    SharedModule,
  ],
  entryComponents: [
    TilesViewComponent,
    ListViewComponent
  ]
})
export class DriveModule { }
