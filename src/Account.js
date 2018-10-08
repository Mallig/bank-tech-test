function Account() {
  this.balance = 0
}

Account.prototype.deposit = function(money) {
  if (Number.isInteger(money)) {
    this.balance+= money
  } else {
    throw 'Invalid deposit amount'
  }

}
