import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MetricsService } from './metrics.service';

import { AppComponent } from './app.component';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { AppRoutingModule } from './/app-routing.module';
import { D3chartComponent } from './d3chart/d3chart.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartjsComponent,
    D3chartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MetricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
