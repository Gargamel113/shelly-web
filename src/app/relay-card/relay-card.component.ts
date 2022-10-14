import { Component, Input } from "@angular/core";
import { delay, take, timeout } from "rxjs";
import { RelayService } from "../api/relay.service";
import { Switch } from "../interface/interfaces";

@Component({
  selector: 'relay-card',
  templateUrl: './relay-card.component.html',
  styleUrls: ['./relay-card.component.scss']
})
export class RelayCardComponent {
  @Input() id: number = 0;
  @Input() text: string = "";
  @Input() voltage: number = 0.0;
  @Input() current: number = 0.0;
  @Input() isActive: boolean = false;
  
  constructor(private relayService: RelayService) {

  }




  changeRelayState() {
    this.isActive = !this.isActive;

    this.relayService.setStatus({"id": this.id, "on": this.isActive}).pipe(take(1))
    .subscribe((data: any) => {
      console.log(data);
      setTimeout(() => {
        this.getCurrent();
      },1000);
    })

  }

  private getCurrent(): void {
    this.relayService.getStatus().pipe(take(1)).subscribe((data: Switch[]) => {
      data.forEach(d => {
        if (d.id === this.id) {
          this.current = d.current;
        }
      })
  })
  }
}