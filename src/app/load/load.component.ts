import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
  isFiltered:Boolean=false;
  totalResults:Number;
  ngOnInit(): void {  this.router.routeReuseStrategy.shouldReuseRoute=()=>false;  }

  handleFilter(val){
    this.isFiltered=val;
  }
  handleTotalResults(val){
    this.totalResults=val;
  }

}
