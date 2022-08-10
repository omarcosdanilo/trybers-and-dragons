import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _counter = 0;

  constructor(name: string) {
    super(name);
    Mage._counter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._counter;
  }
}

export default Mage;