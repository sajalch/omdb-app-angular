import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {LoadComponent} from './load/load.component'
const routes: Routes = [
  {
    path:'',
    component: LoadComponent,runGuardsAndResolvers: 'always' //https://angular.io/api/router/Route#runGuardsAndResolvers
  },
  {
    path:'search/:search/page/:page',
    component: LoadComponent,runGuardsAndResolvers: 'always'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
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
