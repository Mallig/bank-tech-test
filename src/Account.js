function Account(statement = new Statement(), transaction = Transaction) {
  this.balance = 0
  this.statement = statement
  this.transaction = transaction
}

Account.prototype.deposit = function(amount) {
  amount = amount * 100
  this._processTransaction(amount, 'deposit')
}

Account.prototype.withdraw = function(amount) {
  amount = amount * 100
  this._processTransaction(amount, 'withdraw')
}

Account.prototype.printStatement = function() {
  return this.statement._display()
}

Account.prototype._generateTransaction = function(amount, type) {
  this.statement._store(new this.transaction(amount, type, this.balance))
}

Account.prototype._isValidDeposit = function(amount) {
  return Number.isInteger(amount) && amount > 0
}

Account.prototype._isValidWithdrawal = function(amount) {
  return this._isValidDeposit(amount) && amount < this.balance
}

Account.prototype._isValidTransaction = function(amount, type) {
  if (type === 'deposit') {
    return this._isValidDeposit(amount)
  } else if (type === 'withdraw') {
    return this._isValidWithdrawal(amount)
  } else {
    throw 'Invalid Transaction'
  }
}

Account.prototype._processTransaction = function(amount, type) {
  if (this._isValidTransaction(amount, type)) {
    balance_change = type === 'deposit' ? amount : -amount
    this.balance += balance_change
    this._generateTransaction(amount, type)
  }
}
