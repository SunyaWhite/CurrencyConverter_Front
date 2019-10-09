import { Component, OnInit } from "@angular/core";
import { Currency } from "../Models/Currency.model";
import { CurrencyRates } from "../Models/CurrencyRates.model";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import {CurrenciesService} from '../Services/CurrenciesService';

@Component({
    selector : "app-converter",
    templateUrl : "./Converter.component.html"
})

export class ConverterComponent implements OnInit {

    private service: CurrenciesService;
    private sourceCurrency = "RUB";
    private computedCurrency ="EUR";
    private sourceAmount = 0;

    public Currencies: Currency[] = [
      new Currency ('RUB', 73.61),
      new Currency ('USD', 1.12),
      new Currency ('EUR', 1)
    ];

    constructor(service: CurrenciesService){
      this.service = service;
    }

    private async Reload() {
      const res = await this.service.GetCurrencies().then(rates => rates.currencies);
      if (res != null) {
        this.Currencies = res;
      }
    }

    private CurrenciesCodes(): string [] {
      return this.Currencies.map(currency => {
        return currency.code;
      });
    }

    private  GetCurrencyRate(Code: string): number {
      return this.Currencies.filter(currency => {
        return currency.code === Code;
      })[0].rate;
    }

    ngOnInit() {}

    private ComputeAmount(): number {
        if(this.sourceAmount <=  0 || this.sourceCurrency === null || this.computedCurrency === null) {
          return null;
        }
        else {
          return (this.sourceAmount / this.GetCurrencyRate(this.sourceCurrency)) * this.GetCurrencyRate(this.computedCurrency);
        }
    }
}
