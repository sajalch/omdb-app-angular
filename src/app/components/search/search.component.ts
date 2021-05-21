import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() handleFilter:EventEmitter<any>= new EventEmitter();
  isFilter:Boolean=false;
  searchVal:String="";
  constructor(private route:ActivatedRoute,private router: Router) { 
  
  }
  searchQuery:String;
  currentYear: any = new Date().getFullYear();
  handleOnSearch(event:any="",val){
    if(val){
    this.searchQuery="/search/"+val+"/page/1"; 
    this.searchVal=val;   
    }else{
      this.searchQuery="/"; 
    }
    if(event.key === "Enter"){
      this.searchNow();
    }
  }
  
  handleOnFilter(val:Boolean){
    this.isFilter=val;  
    this.handleFilter.emit(val);
  }

  searchNow(){
    this.router.navigate(["/search/"+this.searchVal+"/page/1"]);
  }
  ngOnInit(): void {
    // console.log(this.route.snapshot)
    if(this.route.snapshot.params.search){
      this.searchVal=this.route.snapshot.params.search;
      this.handleOnSearch("",this.searchVal);
    }
  }

}
