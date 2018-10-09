function Account(statement = new Statement(), transaction = Transaction) {
  this.balance = 0
  this.statement = statement
  this.transaction = transaction
}

Account.prototype.deposit = function(money) {
  money = money * 100
  if (this._isValidDeposit(money)) {
    this.balance += money
    this._generateTransaction(money, 'deposit')
  } else {
    throw 'Invalid deposit amount'
  }
}

Account.prototype.withdraw = function(money) {
  money = money * 100
  if (this._isValidWithdrawal(money)) {
    this.balance -= money
    this._generateTransaction(money, 'withdrawal')
  } else {
    throw 'Invalid withdrawal amount'
  }
}

Account.prototype.printStatement = function() {
  return this.statement._display()
}

Account.prototype._generateTransaction = function(money, type) {
  this.statement._store(new this.transaction(money, type, this.balance))
}

Account.prototype._isValidDeposit = function(money) {
  return Number.isInteger(money) && money > 0
}

Account.prototype._isValidWithdrawal = function(money) {
  return Number.isInteger(money) && money > 0 && money < this.balance
}
