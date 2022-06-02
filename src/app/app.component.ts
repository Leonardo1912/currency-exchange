import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }
  response: any
  eur: number = 0
  usd: number = 0
  search() {
    this.http.get('https://api.apilayer.com/currency_data/convert?to=UAH&from=EUR&amount=1&apikey=9DwKIEL15Cp6lsiLUK9taSgAbM9MG67X')
      .subscribe((response) => {
        this.response = response
        this.eur = this.response.result
      })
    this.http.get('https://api.apilayer.com/currency_data/convert?to=UAH&from=USD&amount=1&apikey=9DwKIEL15Cp6lsiLUK9taSgAbM9MG67X')
      .subscribe((response) => {
        this.response = response
        this.usd = this.response.result
      })
  }
}
