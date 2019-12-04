import { Component, OnInit } from '@angular/core';
import { UnitService } from '../unit.service';
import { Observable } from 'rxjs';
import { IUnit } from '../unit.interface';

@Component({
  selector: 'app-unit-dashboard',
  templateUrl: './unit-dashboard.component.html',
  styleUrls: ['./unit-dashboard.component.scss']
})
export class UnitDashboardComponent implements OnInit {

  units$: Observable<IUnit[]>;
  ranks$: Observable<string[]>;

  constructor(private unitService: UnitService) { }

  ngOnInit() {
    this.units$ = this.unitService.getAll();
    this.ranks$ = this.unitService.getRanks();
  }
}