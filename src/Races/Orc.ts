import Race from './Race';

class Orc extends Race {
  private static _counter = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._name = name;
    this._dexterity = dexterity;
    this._maxLifePoints = 74;

    Orc._counter += 1;
  }

  static createdRacesInstances(): number {
    return Orc._counter;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Orc;