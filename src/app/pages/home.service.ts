import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url = "https://api-brl-exchange.actionlabs.com.br/api/1.0/";

  constructor(
    public http: HttpClient,
  ) { }

  getCurrentExchangeRate(params: { from_symbol: string, to_symbol: string }) {
    return this.http.get(this.url + "open/currentExchangeRate/", { params: { ...params, apiKey: "RVZG0GHEV2KORLNA" } });
  }

  getDailyExchangeRate(params: { from_symbol: string, to_symbol: string }) {
    return this.http.get(this.url + "open/dailyExchangeRate/", { params: { ...params, apiKey: "RVZG0GHEV2KORLNA" } });
  }

}
