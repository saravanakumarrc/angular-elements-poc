import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { PositionConfiguration } from './position-configuration.model';

@Component({
  selector: 'ams-tire',
  templateUrl: './ams-ng-tire.component.html',
  styleUrls: ['./ams-ng-tire.component.scss']
})
export class TireComponent implements OnInit, OnChanges {
  @Input() positionConfiguration: PositionConfiguration;
  @Output() select = new EventEmitter();
  serialNumber = '';

  constructor() { }

  ngOnInit() {
    console.log('TireComponent:positionConfiguration', this.positionConfiguration);
  }

  ngOnChanges() {
    console.log('TireComponent:ngOnChange:positionConfiguration:', this.positionConfiguration);
  }

  onClick(): void {
    console.log('TireComponent:onClick', this.positionConfiguration);
    this.select.emit(this.positionConfiguration);
  }
}
