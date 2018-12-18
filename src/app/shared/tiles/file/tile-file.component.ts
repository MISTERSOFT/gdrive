import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TileComponent } from '../tile.component';

@Component({
  selector: 'app-tile-file',
  templateUrl: 'tile-file.component.html',
  styleUrls: ['../tiles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TileFileComponent extends TileComponent implements OnInit {
  @Input() lastOpeningDate: Date;
  constructor() {
    super();
  }
  ngOnInit() { }
}
