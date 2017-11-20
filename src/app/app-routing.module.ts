import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkersOverviewComponent} from './workers-overview/workers-overview.component';
import { AddWorkerComponent} from './add-worker/add-worker.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: WorkersOverviewComponent },
  { path: 'addworker', component: AddWorkerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
