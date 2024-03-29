import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
  pokemons: Pokemon[] = POKEMONS;
  pokemonSelected : Pokemon|undefined;

  ngOnInit(): void {
    console.table(this.pokemons)
  }

  selectPokemon(pokemonId : String){
    const pokemon: Pokemon|undefined = this.pokemons.find(pokemon => pokemon.id == +pokemonId)
    if(pokemon){
      console.log(`Vous avez cliqué sue le pokémon ${pokemon.name}`)
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas.`)
    }
    this.pokemonSelected = pokemon
  }

}
