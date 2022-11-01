import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { AppPokemonsListComponent } from './components/app-pokemons-list/app-pokemons-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppPokemonsInfoComponent } from './components/app-pokemons-list/components/app-pokemons-info/app-pokemons-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppPokemonsListComponent,
    AppPokemonsInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
