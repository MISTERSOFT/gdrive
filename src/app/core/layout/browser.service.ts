import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BrowserService {
  private _windowResize$ = new BehaviorSubject<{ height: number, width: number}>({ height: window.innerHeight, width: window.innerWidth });
  windowResize$ = this._windowResize$.asObservable();
  constructor() {
    fromEvent(window, 'resize')
      .pipe(throttleTime(300))
      .subscribe(() => this._windowResize$.next({ height: window.innerHeight, width: window.innerWidth }));
  }
}
