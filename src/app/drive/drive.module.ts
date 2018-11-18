import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriveRoutingModule } from './drive-routing.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DriveRoutingModule,
    SharedModule,
  ]
})
export class DriveModule { }
