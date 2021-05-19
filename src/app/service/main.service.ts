import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {of} from 'rxjs';
import {map, retry, catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) {
    
  }

  getApiData(searchQuery: String = '',currentPage:Number=1) {
    return this.http.get(
      `https://www.omdbapi.com/?apikey=9ad41d5f&s=${
        searchQuery
      }&page=${currentPage}`
    ).pipe(map((res: any) => {
      // console.log(res)
      const searchResults:any=res.Search.map((data)=>{
        return {
          poster:data.Poster,
          title:data.Title,
          type:data.Type,
          year:data.Year,
          imdbId:data.imdbID
        };
      });    
      const response=res.Response==='True' || res.Response==='true'?true:false;
      return {search:searchResults,response:response,totalResults:res.totalResults};      
    }),
    retry(1), // Retry up to 1 time before failing
    catchError(()=>of({response:false,totalResults:0,error: "Movie not found!"}))
    )    
  } 
  
}


