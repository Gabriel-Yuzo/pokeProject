import { Component, OnInit } from '@angular/core';
import { PokesCallService } from 'src/app/services/pokes-call.service';
import { Pokemon } from 'src/app/pokemons';


@Component({
  selector: 'app-app-pokemons-list',
  templateUrl: './app-pokemons-list.component.html',
  styleUrls: ['./app-pokemons-list.component.css']
})
export class AppPokemonsListComponent implements OnInit {

  pokemons!: Pokemon;


  constructor(private pokesService: PokesCallService) { 
    this.showListPokemons()
  }

  ngOnInit(): void {
  }

  showListPokemons(): void {
    this.pokesService.getAllPokemons().subscribe((pokemons) => (this.pokemons = pokemons));
  }




}
