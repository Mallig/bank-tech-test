function Account() {
  this.balance = 0
}

Account.prototype.deposit = function(money) {
  if (Number.isInteger(money) && money > 0) {
    this.balance += money
  } else {
    throw 'Invalid deposit amount'
  }
}

Account.prototype.withdraw = function(money) {
  if (Number.isInteger(money) && money > 0 && money < this.balance) {
    this.balance -= money
  } else {
    throw 'Invalid withdrawal amount'
  }
}
