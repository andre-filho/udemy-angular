export class CounterService {
  counterActiveToInactive = 0;
  counterInactiveToActive = 0;

  addToActToInac() {
    this.counterActiveToInactive++;
    console.log(this.counterActiveToInactive);
  }

  addToInacToAct() {
    this.counterInactiveToActive++;
    console.log(this.counterInactiveToActive);
  }
}
