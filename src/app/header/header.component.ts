import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() exchange: Function
  constructor(private http: HttpClient) {
    this.exchange = () => {}
  }

  eur: number = 0
  usd: number = 0
  response: any



  ngOnInit(): void {
    this.exchange()
  }

}
