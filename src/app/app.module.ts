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


@NgModule({
  declarations: [
    AppComponent,
    WorkersOverviewComponent,
    AddWorkerComponent,
    EditWorkerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
