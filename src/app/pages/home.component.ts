import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';
import { HomeService } from "./home.service";
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class Home implements OnInit {
  showLast30Days = false;
  exchangeRateDataSource: MatTableDataSource<any> = new MatTableDataSource();
  exchangeRateTableColumns: string[] = ['date', 'open', 'close', 'high', 'low', 'close_dif'];
  from_symbol = "";
  exchangeRate: any = null;
  responseError = false;
  constructor(
    private service: HomeService,
  ) {

  }

  trackByFn(index: number, item: any): any {
    return index;
  }

  ngOnInit(): void {

  }

  toggleSeeLast30Days() {
    this.showLast30Days = !this.showLast30Days;
  }

  getCurrentExchangeRate() {
    this.exchangeRate = null;
    this.responseError = false;
    this.service.getCurrentExchangeRate({ from_symbol: this.from_symbol, to_symbol: "BRL" }).pipe(
      take(1),
    ).subscribe(
      (response: any) => {
        if(response.success){
          this.exchangeRate = response;
        }else{
          this.responseError = true;
        }
      },
      (e) => {
        console.error(e);
      }
    );
  }
  getDailyExchangeRate() {
    if (!this.showLast30Days) {
      this.service.getDailyExchangeRate({ from_symbol: this.from_symbol, to_symbol: "BRL" }).pipe(take(1)).subscribe(
        (response: any) => {
          if(response.success){
            this.exchangeRateDataSource.data = response.data;
            this.showLast30Days = true;
          }
        },
        (e) => {
          console.error(e);
        }
      );
    } else {
      this.showLast30Days = !this.showLast30Days;
    }
  }

  calcPc(n1,n2){
    console.log(n1, n2);
    if(n1>n2){
      return (((n2 - n1) / n1 * 100).toLocaleString('fullwide', {maximumFractionDigits:2}) + "%");
    }else{
      return '+' + (((n2 - n1) / n1 * 100).toLocaleString('fullwide', {maximumFractionDigits:2}) + "%");
    }
  }

  negativeValue(n1,n2){
    if(n1>n2){
      return true;
    }else{
      return false;
    }
  }

}
