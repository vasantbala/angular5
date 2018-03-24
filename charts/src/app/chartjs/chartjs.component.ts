import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../metrics.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.css']
})
export class ChartjsComponent implements OnInit {

  chart = [];
  cities = [];

  constructor(private _metrics: MetricsService) { }

  displayWeatherChart(cityId) {

    this._metrics.dailyForecastByCityId(cityId)
    .subscribe(res => {
      //console.log(res)

      let temp_max = res['list'].map(res => res.main.temp_max);
      let temp_min = res['list'].map(res => res.main.temp_min);
      let alldates = res['list'].map(res => res.dt)

      let weatherDates = []
      alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
      })


      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            { 
              data: temp_max,
              borderColor: "#3cba9f",
              fill: false
            },
            { 
              data: temp_min,
              borderColor: "#ffcc00",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });

   })

  }


  loadCities(){
    this._metrics.getCities().forEach(res => {
      this.cities.push(res);
    })
  }

  ngOnInit() {
    this.displayWeatherChart(524901);
    this.loadCities();

  }

}
