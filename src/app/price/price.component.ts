import { Component } from "@angular/core";
import { take } from "rxjs";
import { PriceService } from "../api/price.service";
import { Price } from "../interface/interfaces";

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {

  prices: Price[] = [];

  constructor(private priceService: PriceService) {

  }

  onFetch(): void {
    this.priceService.fetchAllSorted()
    .pipe(take(1))
    .subscribe((p: Price[]) => {
      console.log(p)
      this.prices = p;
    });
  }
}