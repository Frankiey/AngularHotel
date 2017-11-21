import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-working-times',
  templateUrl: './working-times.component.html',
  styleUrls: ['./working-times.component.css']
})

export class WorkingTimesComponent implements OnInit {

  ma: boolean[];
  di: boolean[];
  wo: boolean[];
  do: boolean[];
  vr: boolean[];
  za: boolean[];
  zo: boolean[];

  id: number;
  index: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private workerService: WorkerService
  ) { }

  ngOnInit() {
    this.ma = [
      false, false, false, false
    ];
    this.di = [
      false, false, false, false
    ];
    this.wo =[
      false, false, false, false
    ];
     this.do = [
      false, false, false, false
    ];
     this.vr = [
      false, false, false, false
    ];
     this.za = [
      false, false, false, false
    ];
     this.zo = [
      false, false, false, false
    ];
  }

  getWorker(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    let worker = this.workerService.getWorker(id);
  }

  save(): void {
    return;
  }

}
