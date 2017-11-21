import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WorkersOverviewComponent } from './workers-overview/workers-overview.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkerService } from './worker.service';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';
import { WorkingTimesComponent } from './working-times/working-times.component'


@NgModule({
  declarations: [
    AppComponent,
    WorkersOverviewComponent,
    AddWorkerComponent,
    EditWorkerComponent,
    WorkingTimesComponent//,
    // AppRoutingModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
