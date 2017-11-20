import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WorkersOverviewComponent } from './workers-overview/workers-overview.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { AppRoutingModule } from './/app-routing.module';
import { WorkerService } from './worker.service'


@NgModule({
  declarations: [
    AppComponent,
    WorkersOverviewComponent,
    AddWorkerComponent
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
