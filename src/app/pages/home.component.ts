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
  exchangeRateTableColumns: string[] = ['date', 'open', 'close', 'high', 'low', 'close'];
  from_symbol: "";
  exchangeRate: any;
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
    this.service.getCurrentExchangeRate({ from_symbol: this.from_symbol, to_symbol: "BRL" }).pipe(
      take(1),
    ).subscribe(
      (response: any) => {
        this.exchangeRate = response;
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
          console.log(response);
          this.exchangeRateDataSource.data = response.data;
          this.showLast30Days = true;
        },
        (e) => {
          console.error(e);
        }
      );
    } else {
      this.showLast30Days = !this.showLast30Days;
    }
  }
}
