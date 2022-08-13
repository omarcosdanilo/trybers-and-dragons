import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    protected player: Fighter,
    private _monsters: Fighter[] | SimpleFighter[],
  ) {
    super(player);
    this._monsters = _monsters;
  }

  fight(): number {
    let battleResult = 0;
  
    this._monsters.forEach((monster) => {
      monster.receiveDamage(this.player.strength);
      monster.attack(this.player);

      if (this.player.lifePoints <= 0) {
        battleResult = -1;
      } else {
        battleResult = 1;
      }
    });
    return battleResult;
  }
}

export default PVE;