import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
  <h3>{{ counter }}</h3>

  <button (click)="increaseBy(0)">-1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(1)">+1</button>

  `,
})
export class CounterComponent {
  public counter: number = 10;

  public increaseBy(value: number):void{
    if (value == 1 ) {
      this.counter += 1
    }
    if (value == 0 ) {
      this.counter -= 1
    }

  }
  reset():void{
    this.counter = 10
  }


}
