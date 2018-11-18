import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'drive' },
  { path: 'drive', loadChildren: './drive/drive.module#DriveModule' },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
