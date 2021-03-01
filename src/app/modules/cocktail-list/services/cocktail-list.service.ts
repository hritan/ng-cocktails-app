import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CocktailListService {
  constructor(private httpClient: HttpClient) {}

  /***  LIST API ***/
  getList() {
    return this.httpClient
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
      )
      .pipe(catchError(this.handleError));
  }

  /*** Handle Http Errors ***/
  handleError = (error: HttpErrorResponse | any) => {
    switch (error.status) {
      case 400:
        console.log(400);
        break;
      case 401:
        console.log(401);
        break;
      case 500:
        console.log(500);
        break;
      case 503:
        console.log(503);
        break;
    }
    console.log(error);
    return throwError(error);
  };
}
