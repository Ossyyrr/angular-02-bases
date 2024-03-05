import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: String[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Captain America',
  ];

  public heroesBorrados: String[] = [];

  public deleteLastHero(): void {
    this.heroesBorrados.push(this.heroes[this.heroes.length - 1]);
    this.heroes.pop();
  }
}
