import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CurrencyRates } from '../Models/CurrencyRates.model';

@Injectable()
export class CurrenciesService {
    private url = 'https://localhost:5001/api';
    private headers: HttpHeaders;
    private client: HttpClient;

    constructor( client: HttpClient) {
      this.client = client;
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset = utf-8' });
    }

    public GetCurrencies(): Promise<CurrencyRates> {
        return this.client.get<CurrencyRates>(this.url + '/Currencies', {headers: this.headers, observe: 'response'})
          .toPromise()
          .then(response => response.body)
          .catch(error => {
              console.log(error);
              return null; });
    }
}
