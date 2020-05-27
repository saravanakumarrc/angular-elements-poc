import { Component, Input, Output, EventEmitter, ViewEncapsulation, OnChanges, OnInit } from '@angular/core';
import { PositionConfiguration } from './position-configuration.model';

@Component({
  selector: 'ams-tire',
  templateUrl: './ams-ng-tire.component.html',
  styleUrls: ['./ams-ng-tire.component.scss']
})
export class TireComponent implements OnInit, OnChanges {
  @Input() mode = 'viewer';
  @Input() positionConfiguration: PositionConfiguration;
  @Output() select = new EventEmitter();
  serialNumber = '';

  constructor() { }

  ngOnInit() {
    console.log('TireComponent:mode', this.mode);
    console.log('TireComponent:positionConfiguration', this.positionConfiguration);
  }

  ngOnChanges() {
    console.log('TireComponent:ngOnChange:mode:', this.mode);
    console.log('TireComponent:ngOnChange:positionConfiguration:', this.positionConfiguration);
    this.serialNumber = this.positionConfiguration.unitTireInfo != null && this.positionConfiguration.unitTireInfo.serialNumber !== '' ?
                        ('Part Number: ' + this.positionConfiguration.unitTireInfo.partNumber
                          + '  Serial Number ' + this.positionConfiguration.unitTireInfo.serialNumber) : 'No Serial';
  }

  onClick(): void {
    console.log('TireComponent:onClick', this.positionConfiguration);
    
    this.select.emit(this.positionConfiguration);

    this.positionConfiguration.selected = !this.positionConfiguration.selected;

    if (this.positionConfiguration.selected && this.positionConfiguration.isInvalid) {
      this.positionConfiguration.isInvalid = false;
    } else if (!this.positionConfiguration.selected && this.positionConfiguration.isInvalid === false) {
      if (!this.positionConfiguration.positionId) {
        this.positionConfiguration.isInvalid = true;
      } else {
        this.positionConfiguration.isInvalid = false;
      }
    }
  }

  IsEmpty() {
    if (this.positionConfiguration != null
        && this.positionConfiguration.unitTireInfo != null
        && this.positionConfiguration.unitTireInfo.partNumber === '') {
          return true;
    }
    return false;
  }

  IsSpare() {
    return this.positionConfiguration.sequence === 0;
  }

  get SerialNumber() {
    return this.positionConfiguration.unitTireInfo != null && this.positionConfiguration.unitTireInfo.serialNumber !== '' ?
      this.positionConfiguration.unitTireInfo.serialNumber : '';
  }
}
