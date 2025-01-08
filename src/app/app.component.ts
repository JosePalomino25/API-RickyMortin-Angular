import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './rick-and-morty.service';

export interface Character {
  name: string;
  status: string;
  species: string;
  image: string;
  gender: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  characters: Character[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    const results: Character[] = [];
    this.rickAndMortyService.getCharacters().subscribe((data) => {
      this.characters = data.results;
    });
  }

  getStatusClass(status: string): string {
    return status === 'Alive' ? 'Alive' : status === 'Dead' ? 'Dead' : 'unknown';
  }


}
