import { Component, Input, OnInit } from '@angular/core';
import { BrowserService } from '@app/core/layout';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-recent-opened-files',
  templateUrl: 'recent-opened-files.component.html',
  styleUrls: ['recent-opened-files.component.scss']
})

export class RecentOpenedFilesComponent implements OnInit {
  @Input() set recentFiles(values: any[]) {
    this._recentFiles = values;
    this._recentFiles$.next(values);
  }
  private _recentFiles = [];
  private _recentFiles$ = new BehaviorSubject<any[]>([]);
  gridCols = 5;
  recentFiles$ = this._recentFiles$.asObservable();

  constructor(private browser: BrowserService) { }

  ngOnInit() {
    this.browser.windowResize$.subscribe(({ width }) => {
      if (width < 1000) {
        this.gridCols = 2;
      } else if (width < 1230) {
        this.gridCols = 3;
      } else if (width < 1456) {
        this.gridCols = 4;
      } else {
        this.gridCols = 5;
      }
      this._recentFiles$.next(this._recentFiles.slice(0, this.gridCols));
    });
  }

}
