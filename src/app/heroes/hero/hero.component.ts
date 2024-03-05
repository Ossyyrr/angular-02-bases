import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name = 'peter parker';
  public age = 25;

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  getHeroDescriptionst(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Tony Stark';
  }

  changeAge(): void {
    this.age = 45;
  }

  resetValues(): void {
    this.name = 'Peter Parker';
    this.age = 25;
  }
}
