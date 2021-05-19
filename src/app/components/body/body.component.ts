import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {MainService} from '../../service/main.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Output() handleTotalResults:EventEmitter<any>=new EventEmitter();
  @Input() isFiltered:Boolean;
  data:any[];
  tempData:any[];
  currentPage:any;
  apidata:any;
  haveMoreData:Boolean=true;
  filterSearch:Boolean=false;
  placeHolderImg:String;
  
  constructor(private route:ActivatedRoute, private sv:MainService,private router:Router) {
    this.placeHolderImg='../../../assets/placeholder.jpg';
   }
   onImgNotFoundError(event){
    event.target.src=this.placeHolderImg;
   }
  ngOnChanges(){
    const filteredSearch=!!this.isFiltered;
        if(!!this.data){            
            if(filteredSearch){
                this.data=[...this.data.filter((item)=>filteredSearch?item.year.split('-')[0]>='2010':item)];     
            }else{
                this.data=[...this.tempData];
            }
            this.haveMoreData=this.data.length>0;
        }
    }
  ngOnInit(): void {
    const {search, page}=this.route.snapshot.params;
    this.currentPage=page;    
    this.apidata=this.sv.getApiData(search, +page)
    .subscribe((data:any)=>{
        if(data.response){
            this.data=[...data.search];
            this.tempData=[...this.data];
            this.handleTotalResults.emit(data.totalResults);
        }else{
            this.haveMoreData=false;
            this.handleTotalResults.emit(0);
        }
    });        
    
  }

  ngOnDestroy(){
    this.apidata.unsubscribe();
  }

 
}
