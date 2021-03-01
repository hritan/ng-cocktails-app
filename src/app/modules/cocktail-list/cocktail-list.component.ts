import { Component, OnInit } from '@angular/core';
import { CocktailListService } from './services/cocktail-list.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails;
  public filterText: string;
  public sortOrder = true;       // true is asc and false is desc
  public sortCol: string;

  constructor(
    public cocktailSvc: CocktailListService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.cocktailSvc.getList().subscribe( res => {
      res['drinks'].forEach(drink => {
        for(let x in drink){
          if(x.search('Ingredient') > -1){
            if(drink[x] == null){
              drink['ingredients'] = drink['ingredientsArray'].join(', ');
              break;
            }else{
              (drink['ingredientsArray'] == undefined) ? drink['ingredientsArray'] = [drink[x]] : drink['ingredientsArray'].push(drink[x]); 
            }
          }
        }
      });
      this.cocktails = res['drinks'];
    })
  }
  
  sort(colName) {
    this.sortCol = colName;
    if (this.sortOrder == true){
      this.cocktails.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
      this.sortOrder = !this.sortOrder
    }
    else{
      this.cocktails.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
      this.sortOrder = !this.sortOrder
    }
  }
}
