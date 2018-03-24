import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MetricsService {

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=bf70554ae0aea60708f116f40d0e4fea")
      .map(result => result);
  }

  dailyForecastByCityId(cityId) {
    return this._http.get("http://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=bf70554ae0aea60708f116f40d0e4fea")
      .map(result => result);
  }

  getCities(){
    return [{'name': 'Moscow', 'id': 524901}, {'name': 'Dallas', 'id': 4190598}, {'name': 'Hyderabad', 'id': 1269843}];
  }

}


