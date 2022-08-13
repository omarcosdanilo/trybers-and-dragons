import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type Player = Fighter | SimpleFighter;

class PVP extends Battle {
  constructor(player: Fighter, protected player2: Player) {
    super(player);
    this.player2 = player2;
    
    this.fight();
  }

  fight(): number {
    const batteResult = this.player2.receiveDamage(50);

    if (batteResult === -1) {
      return 1;
    }

    return -1;
  }
}
export default PVP;