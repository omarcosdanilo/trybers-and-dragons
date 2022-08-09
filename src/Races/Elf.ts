import Race from './Race';

class Elf extends Race {
  private static _counter = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._name = name;
    this._dexterity = dexterity;
    this._maxLifePoints = 99;

    Elf._counter += 1;
  }

  static createdRacesInstances(): number {
    return Elf._counter;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Elf;