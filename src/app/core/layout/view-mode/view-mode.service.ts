import { Injectable } from '@angular/core';
import { ViewMode } from '@app/shared/enums';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ViewModeService {
  private _currentViewMode = new BehaviorSubject<ViewMode>(ViewMode.TILES);
  currentViewMode$ = this._currentViewMode.asObservable();
  switchView() {
    const view = this._currentViewMode.getValue() === ViewMode.TILES ? ViewMode.LIST : ViewMode.TILES;
    this._currentViewMode.next(view);
  }
}
