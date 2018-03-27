export class CounterService {
  fromActiveToInactiveCounter = 0;
  fromInactiveToActiveCounter = 0;

  Count(selectedStatus: string) {
    selectedStatus === 'active' ? this.fromInactiveToActiveCounter++ : this.fromActiveToInactiveCounter++;
  }

  ShowInLogStats () {
    console.clear();
    console.log('fromActiveToInactiveCounter: ' + this.fromActiveToInactiveCounter);
    console.log('fromInactiveToActiveCounter: ' + this.fromInactiveToActiveCounter);
  }
}
