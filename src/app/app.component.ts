import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from './core/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themeValue: Theme;
  constructor(private theme: ThemeService, private overlayContainer: OverlayContainer) { }

  ngOnInit() {
    this.theme.theme$.subscribe(theme => {
      this.themeValue = theme;
      const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
      const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('theme'));
      if (themeClassesToRemove.length) {
        overlayContainerClasses.remove(...themeClassesToRemove);
      }
      overlayContainerClasses.add(theme);
    });
  }
}
