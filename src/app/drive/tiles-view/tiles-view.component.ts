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
  recentFiles: any[];
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
    this.recentFiles = [
      { name: 'File 1', lastOpeningDate: new Date() },
      { name: 'File 2', lastOpeningDate: new Date() },
      { name: 'File 3', lastOpeningDate: new Date() },
      { name: 'File 4', lastOpeningDate: new Date() },
      { name: 'File 5', lastOpeningDate: new Date() }
    ];
  }
}
