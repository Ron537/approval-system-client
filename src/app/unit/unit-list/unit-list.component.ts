import { Component, OnInit, Input } from '@angular/core';
import { IUnit } from '../unit.interface';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss']
})
export class UnitListComponent implements OnInit {

  @Input() units: IUnit[];
  @Input() ranks: string[];

  constructor() { }

  ngOnInit() {
  }

}
