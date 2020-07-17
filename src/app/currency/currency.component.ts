import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

interface RateDateRates {
  [k: string]: { [k: string]: number }
}

interface RateData {
  start_at: string;
  base: string;
  end_at: string;
  rates: RateDateRates;
}

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  baseRate = 'EUR';
  symbols = 'USD,GBP';
  currencyData: any;

  startDate: string;
  endDate: string;
  rates: any[];

  constructor(private restClient: HttpClient) {}

  ngOnInit(): void {
    this.restClient
      .get<RateData>(this.getRatesUrl())
      .subscribe((data) => this.processData(data));
  }

  processData(data: RateData): void {
    this.startDate = data.start_at;
    this.endDate = data.end_at;
    this.rates = Object.entries(data.rates)
    .map(divainiba=>({
      date: divainiba[0],
      rate: divainiba[1]
    }));
  }

  getRatesUrl(): string {
    return environment.ratesUrl
      .replace('{base}', this.baseRate)
      .replace('{symbols}', this.symbols);
  }
}
