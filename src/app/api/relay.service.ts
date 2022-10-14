import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Switch } from "../interface/interfaces";




@Injectable({
  providedIn: 'root'
})
export class RelayService {

  readonly URL: string = "localhost:8080/api/relays";

  constructor(private client: HttpClient) {

  }

  public getStatus(): Observable<Switch[]> {
    return this.client.get<Switch[]>("http://localhost:8080/api/relays/health");
  }

  public setStatus(  relaySwich: {"id": number, "on": boolean}   ): Observable<string> {
    return this.client.post<string>(`http://localhost:8080/api/relays`, relaySwich);
  }
}