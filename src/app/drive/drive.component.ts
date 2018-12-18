import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ViewModeService } from '@app/core/layout/view-mode';
import { ViewMode } from '@app/shared/enums';
import { ListViewComponent } from './list-view/list-view.component';
import { TilesViewComponent } from './tiles-view/tiles-view.component';

@Component({
  selector: 'app-drive',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.scss']
})
export class DriveComponent implements OnInit, AfterViewInit {
  @ViewChild('viewContainerRef', { read: ViewContainerRef }) $viewContainerRef: ViewContainerRef;

  constructor(
    private _crf: ComponentFactoryResolver,
    private _viewMode: ViewModeService) { }

  ngOnInit() {
    this._viewMode.currentViewMode$.subscribe(view => this.render(view));
  }

  ngAfterViewInit() {
    this._viewMode.currentViewMode$.subscribe(view => {
      setTimeout(() => this.render(view));
    });
  }

  render(viewMode: ViewMode) {
    let componentFactory;
    this.$viewContainerRef.clear();

    switch (viewMode) {
      case ViewMode.LIST:
        componentFactory = this._crf.resolveComponentFactory(ListViewComponent);
        break;
      case ViewMode.TILES:
        componentFactory = this._crf.resolveComponentFactory(TilesViewComponent);
        break;
      default: break;
    }

    this.$viewContainerRef.createComponent(componentFactory);
  }

}
