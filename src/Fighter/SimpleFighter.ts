import Fighter from './Fighter';

interface SimpleFighter
  extends Omit<Fighter, 'defense' | 'energy' | 'special' | 'levelUp'>{

  attack(enemy: SimpleFighter): void;

}

export default SimpleFighter;