import { UnitTire } from './unit-tire.model';

export class PositionConfiguration {
  public tireConfigurationId: number;
  public tireConfigTmtCodeId: number;
  public positionId: number;
  public positionCode: string;
  public positionDescription: string;
  public selected: boolean;
  public sequence: number;
  public isInvalid: boolean;
  public unitTireInfo: UnitTire;

  constructor() {
    this.selected = false;
  }
}
