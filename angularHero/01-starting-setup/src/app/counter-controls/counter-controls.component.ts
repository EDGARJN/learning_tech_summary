import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.action';



@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store:Store) {}

  onIncrement() {
    this.store.dispatch(increment({val:2}));
    console.log("clicked")
  }

  onDecrement() {
    this.store.dispatch(decrement({valInt:2}))
    // this.counterService.decrement();
  }
}
