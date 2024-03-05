import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(
    // forma corta de crear una clase,
    // se crea la propiedad dbzService,
    private dbzService: DbzService // deben ser privados (buenas practicas)
  ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters]; // Creo una copia del array para no modificar el original
  }

  public onDeleteCharacter(id: String): void {
    this.dbzService.deleteCharacterById(id);
  }

  public onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }

  ngOnInit() {}
}
