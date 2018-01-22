class ForagerBee extends Bee {
  constructor(age = 10, color, food, job = 'find pollen', canFly = true, treasureChest = []) {
    super(age, color, food, job);
    this.canFly = canFly;
    this.treasureChest = treasureChest;
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
