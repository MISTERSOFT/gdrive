import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-list-view',
  templateUrl: 'list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  @ViewChild(MatSort) $matSort: MatSort;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'owner', 'lastUpdate', 'fileSize'];
  private documents: { name: string, owner: string, lastUpdate: Date, fileSize: string }[] = [];
  constructor() { }

  ngOnInit() {
    const lastUpdate = new Date()
    for (let i = 0; i < 40; i++) {
      this.documents.push({ name: `Doc_${i}`, owner: 'me', lastUpdate, fileSize: '1.6kb' });
    }
    this.dataSource.data = this.documents;
    this.dataSource.sort = this.$matSort;
  }
}
