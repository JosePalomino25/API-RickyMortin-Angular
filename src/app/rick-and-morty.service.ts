import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Character} from "@app/character-interface";
import {environment} from "@environment/environment";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private apiUrl = environment.baseUrlAPI + '/character';

  constructor(private http: HttpClient) {}


  getCharacters(): Observable<any> {
    return this.http.get<Character>(this.apiUrl);
  }
}

// Mejorar diseño responsive y correcciones de vista.
// Uso de environments
