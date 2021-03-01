import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './modules/cocktail-list/cocktail-list.component';
import { CocktailListService } from './modules/cocktail-list/services/cocktail-list.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './common/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CocktailListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
