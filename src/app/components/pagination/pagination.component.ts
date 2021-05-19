import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalResults:any;
  searchQuerys:String[]=[];  
  searchedVal:String;
  currentPage:Number;
  itemsPerPage:any;
  totalPages:any;
  constructor(private route:ActivatedRoute) {
    this.itemsPerPage=10;    
   }
  handleOnSearchPaginate(search,page){
    return "/search/"+search+"/page/"+page;   
  }
  dynamic(){
    return document.createElement('h2').innerHTML="<p>Sajal</p>";
  }
  ngOnInit(): void {
    const {search, page} = this.route.snapshot.params;
    this.searchedVal=search;
    this.currentPage=+page;
  }
  ngOnChanges():void{
    this.totalPages=this.totalResults>0?Math.ceil(this.totalResults/ this.itemsPerPage):0;
    for(let i=1;i<=this.totalPages;i++){
      this.searchQuerys.push(this.handleOnSearchPaginate(this.searchedVal,i));
    }
  }
}
