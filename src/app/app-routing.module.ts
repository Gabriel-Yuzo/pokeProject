import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppPokemonsListComponent } from "./components/app-pokemons-list/app-pokemons-list.component";
import { AppTopBarComponent } from "./components/app-top-bar/app-top-bar.component";


const routes: Routes = [
    {path:'', component: AppTopBarComponent},
    {path:'list', component: AppPokemonsListComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}