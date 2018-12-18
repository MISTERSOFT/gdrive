import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile.component';

@Component({
  selector: 'app-tile-file',
  templateUrl: 'tile-file.component.html',
  styleUrls: ['../tiles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TileFileComponent extends TileComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() { }
}
