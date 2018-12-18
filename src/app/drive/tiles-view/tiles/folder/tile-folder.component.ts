import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile.component';

@Component({
  selector: 'app-tile-folder',
  templateUrl: 'tile-folder.component.html',
  styleUrls: ['../tiles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileFolderComponent extends TileComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() { }
}
