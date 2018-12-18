import { Component, OnInit } from '@angular/core';
import { ViewModeService } from '@app/core/layout/view-mode';
import { ViewMode } from '@app/shared/enums';
import { Theme, ThemeService } from '../../theme.service';

@Component({
  selector: 'app-menu-top',
  templateUrl: 'menu-top.component.html',
  styleUrls: ['menu-top.component.scss']
})

export class MenuTopComponent implements OnInit {
  private currentViewMode: ViewMode = ViewMode.TILES;
  isSearchBarFocus = false;
  THEME_ENUM = Theme;

  get isListView() { return this.currentViewMode === ViewMode.LIST; }
  get isTilesView() { return this.currentViewMode === ViewMode.TILES; }

  documents = [
    { id: 1, name: 'Document 1', type: 1 },
    { id: 2, name: 'Document 2', type: 2 },
    { id: 3, name: 'Document 3', type: 3 },
  ];

  constructor(public theme: ThemeService, private viewMode: ViewModeService) { }

  ngOnInit() {
    this.viewMode.currentViewMode$.subscribe(view => this.currentViewMode = view);
  }

  switchTheme() {
    this.theme.switchTheme();
  }

  switchView() {
    this.viewMode.switchView();
  }


  toggleSearchbarFocus(e) { this.isSearchBarFocus = !this.isSearchBarFocus; }
}
