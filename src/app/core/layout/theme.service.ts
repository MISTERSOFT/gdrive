import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  LIGHT = 'app-theme-light',
  DARK = 'app-theme-dark'
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private _theme$ = new BehaviorSubject<Theme>(Theme.LIGHT);
  theme$ = this._theme$.asObservable();
  constructor() { }
  switchTheme() {
    const theme = this._theme$.getValue();
    if (theme === Theme.LIGHT) {
      this._theme$.next(Theme.DARK);
    } else {
      this._theme$.next(Theme.LIGHT);
    }
  }
}
