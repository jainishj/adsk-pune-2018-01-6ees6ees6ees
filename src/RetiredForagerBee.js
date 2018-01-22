class RetiredForagerBee extends ForagerBee {
  constructor(age = 40, color = 'grey', food, job = 'gamble', canFly = false, treasureChest) {
    super(age, color , food,  job, canFly, treasureChest);
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble(treasure) {
    this.treasureChest.push(treasure);
  }
};
