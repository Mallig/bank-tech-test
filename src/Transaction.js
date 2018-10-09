function Transaction(amount, type, balance, date = new Date().toLocaleDateString()) {
  this.date = date
  this.amount = amount
  this.type = type
  this.balance = balance
}

Transaction.prototype._display = function() {
  result = `${this.date} || `
  result = result.concat(this.type === 'deposit' ? `${this.amount} || ` : `|| ${this.amount} `)
  result = result.concat(`|| ${this.balance}`)
  return result
}
