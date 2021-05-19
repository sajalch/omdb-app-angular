import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BodyComponent } from './body/body.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SearchComponent,
    BodyComponent,
    PaginationComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    SearchComponent,
    BodyComponent,
    PaginationComponent
  ]
})
export class ComponentsModule { }
