function Account() {
  this.balance = 0
}

Account.prototype.deposit = function(money) {
  this.balance+= money
}
