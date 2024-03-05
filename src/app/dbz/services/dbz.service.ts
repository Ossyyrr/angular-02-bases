import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' }) // El servicio se inyecta en el root, creando un singleton
export class DbzService {
  constructor() {}

  addCharacter(character: Character): void {
    console.log('Main Page Component');
    console.log(character);
    const newCharacter = {
      ...character,
      id: uuid(),
    };

    this.characters.push(newCharacter);
  }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 9000,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 5000,
    },
  ];

  public deleteCharacterById(id: String): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
