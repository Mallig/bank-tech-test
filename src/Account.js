function Account() {
  this.balance = 0
  this.transactions = []
}

Account.prototype.deposit = function(money, date = Date()) {
  if (Number.isInteger(money) && money > 0) {
    this.balance += money
    this.transactions.push([money, date.toString()])
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
