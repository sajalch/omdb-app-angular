import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import {LoadComponent} from './load/load.component'
const routes: Routes = [
  {
    path:'',
    component: LoadComponent,runGuardsAndResolvers: 'always'
  },
  {
    path:'search/:search/page/:page',
    component: LoadComponent,runGuardsAndResolvers: 'always'
  },

]

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  RouterModule.forRoot(routes ,{onSameUrlNavigation: 'reload'}),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
