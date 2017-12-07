import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkersOverviewComponent } from './workers-overview/workers-overview.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkerService } from './worker.service';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StandardScheduleComponent } from './standard-schedule/standard-schedule.component';
import { RoleService } from './role.service';
import { HttpModule } from '@angular/http';
import { RolesOverviewComponent } from './roles-overview/roles-overview.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { ScheduleService } from './schedule.service';
import { DateFromNumber } from './date-from-number-pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersOverviewComponent,
    AddWorkerComponent,
    EditWorkerComponent,
    FrontPageComponent,
    NavbarComponent,
    StandardScheduleComponent,
    RolesOverviewComponent,
    EditRoleComponent,
    DailyScheduleComponent,
    DateFromNumber
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [WorkerService, RoleService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
