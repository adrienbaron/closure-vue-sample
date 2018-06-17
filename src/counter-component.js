export default class CounterComponent {
  constructor() {
    this.counter = 8;
  }

  add() {
    this.counter++;
  }

  getValue() {
    return this.counter;
  }
}