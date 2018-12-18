import { Component, OnInit } from '@angular/core';
import { BrowserService } from '@app/core/layout';

@Component({
  selector: 'app-tiles-view',
  templateUrl: 'tiles-view.component.html',
  styleUrls: ['tiles-view.component.scss']
})

export class TilesViewComponent implements OnInit {
  folders: any[];
  files: any[];
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  gridCols = 8;

  constructor(private browser: BrowserService) { }

  ngOnInit() {
    this.browser.windowResize$.subscribe(({ width }) => {
      if (width < 1280) {
        this.gridCols = 5;
      } else if (width >= 1280 && width < 1440) {
        this.gridCols = 6;
      } else {
        this.gridCols = 8;
      }
    });
    this.folders = [
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
      { name: 'Lorem ipsum' },
    ];
    this.files = [
      { name: 'File 1' },
      { name: 'File 2' },
      { name: 'File 3' },
      { name: 'File 4' },
      { name: 'File 5' },
      { name: 'File 6' },
      { name: 'File 1' },
      { name: 'File 2' },
      { name: 'File 3' },
      { name: 'File 4' },
      { name: 'File 5' },
      { name: 'File 6' },
    ];
  }
  toggleCols() {
    this.gridCols = this.gridCols === 5 ? 3 : 5;
  }
}
