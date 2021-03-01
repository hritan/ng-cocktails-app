import { Component, OnInit } from '@angular/core';
import { CocktailListService } from './services/cocktail-list.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails;

  constructor(
    public cocktailSvc: CocktailListService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.cocktailSvc.getList().subscribe( res => {
      // for(res['drinks'])
      this.cocktails = res['drinks'];
    })
  }

}
