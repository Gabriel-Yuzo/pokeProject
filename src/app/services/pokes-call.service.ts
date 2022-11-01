import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokesCallService {


  private apiURL = 'https://pokeapi.co/api/v2'

  constructor(private http: HttpClient) { }


  getAllPokemons(): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiURL}/pokemon`)
  }


  getPokemon(id: number): Observable<Pokemon>{
  return this.http.get<Pokemon>(`${this.apiURL}/pokemon/${id}`)
  }

}
