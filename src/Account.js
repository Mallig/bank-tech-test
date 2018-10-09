function Account(statement = new Statement()) {
  this.balance = 0
  this.statement = statement
}

Account.prototype.deposit = function(money) {
  if (Number.isInteger(money) && money > 0) {
    this.balance += money
    this._generateTransaction(money, 'deposit')
    // transaction = new Transaction(money, 'deposit', this.balance)
    // this.statement.store(transaction)
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

Account.prototype.printStatement = function() {
  return this.statement.display()
}

Account.prototype._generateTransaction = function(money, type, trans = Transaction) {
  this.statement.store(new trans(money, type, this.balance))
}
