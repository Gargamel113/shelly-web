import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Price } from "../interface/interfaces";


@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private URL: string = "http://localhost:8080/api/prices";

  constructor(private http: HttpClient) {}

  public fetchAll(): Observable<Price[]> {
    return this.http.get<Price[]>("http://localhost:8080/api/prices/sorted");
  }

  public fetchAllSorted(): Observable<Price[]> {
    return this.http.get<Price[]>(`http://localhost:8080/api/prices/sorted`);
  }

}