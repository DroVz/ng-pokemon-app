import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsPokemonComponent } from "./pokemon/details-pokemon/details-pokemon.component";
import { ListPokemonComponent } from "./pokemon/list-pokemon/list-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "pokemons", component: ListPokemonComponent },
  { path: "pokemon/:id", component: DetailsPokemonComponent },
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
