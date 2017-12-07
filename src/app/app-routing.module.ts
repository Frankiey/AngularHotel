import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WorkersOverviewComponent} from './workers-overview/workers-overview.component';
import { AddWorkerComponent} from './add-worker/add-worker.component';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { StandardScheduleComponent } from './standard-schedule/standard-schedule.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { EditRolesComponent } from './edit-roles/edit-roles.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: FrontPageComponent },
  { path: 'overview', component: WorkersOverviewComponent },
  { path: 'addworker', component: AddWorkerComponent },
  { path: 'editworker/:id', component: EditWorkerComponent},
  { path: 'standardschedule/:id', component: StandardScheduleComponent },
  { path: 'schedule', component: DailyScheduleComponent},
  { path: 'roles', component: EditRolesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
