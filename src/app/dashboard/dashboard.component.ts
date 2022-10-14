import { Component } from "@angular/core";
import { take } from "rxjs";
import { PriceService } from "../api/price.service";
import { RelayService } from "../api/relay.service";
import { Price, Switch } from "../interface/interfaces";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  prices: Price[] = [];
  switches: Switch[] = [];

  constructor(private priceService: PriceService, private relayService: RelayService) {
      relayService.getStatus().pipe(take(1)).subscribe((data: Switch[]) => {
        console.log(data);
        this.switches = data
      });
  }

  getPrice() {
    this.priceService.fetchAll()
      .pipe(take(1)).subscribe((p: Price[]) => {
        console.log(p);
        this.prices = p
      });
  }

}