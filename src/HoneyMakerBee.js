class HoneyMakerBee extends Bee{
  constructor(age = 10, color, food, job = 'make honey', honeyPot = 0) {
    super(age, color, food, job);
    this.honeyPot = honeyPot;
  }

  makeHoney() {
    this.honeyPot += 1;
  }

  giveHoney() {
    this.honeyPot -= 1;
  }
}
