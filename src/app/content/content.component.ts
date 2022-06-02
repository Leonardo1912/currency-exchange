import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  currency1: string = ""
  currency2: string = ""
  value1: number = 0
  value2: number = 0
  toggle: boolean = true
  response: any
  error: boolean = false

  constructor(private http: HttpClient) {
  }

  change(currency1: string, currency2: string, value1: number, value2: number, toggle: boolean) {
    this.http.get("https://api.apilayer.com/currency_data/convert",
      {
        params: {
          from: toggle ? currency1 : currency2,
          to: toggle ? currency2 : currency1,
          amount: toggle ? value1 : value2,
          apikey: "9DwKIEL15Cp6lsiLUK9taSgAbM9MG67X"
        }
      })
      .subscribe((response) => {
        this.response = response
        toggle ? this.value2 = this.response.result : this.value1 = this.response.result
      })
  }

  click(toggle: boolean, value: number, currency1: string, currency2: string) {
    this.toggle = toggle
    if(value === 0 || currency1 === "" || currency2 === ""){
      this.error = true
    }
    else {
      this.error = false
      this.change(this.currency1, this.currency2, this.value1, this.value2, this.toggle)
    }
  }


  ngOnInit(): void {
  }

}
