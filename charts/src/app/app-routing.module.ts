import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { D3chartComponent } from './d3chart/d3chart.component';
const routes: Routes = [
  { path: 'chartjs', component: ChartjsComponent},
  { path: 'd3chart', component: D3chartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { 
}
