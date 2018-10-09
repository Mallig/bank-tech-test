function Transaction(amount, type, balance, date = new Date().toLocaleDateString()) {
  this.date = date
  this.amount = amount
  this.type = type
  this.balance = balance
}

Transaction.prototype._display = function() {
  result = `${this.date} || `
  result = result.concat(this.type === 'deposit' ? `${(this.amount/100).toFixed(2)} || ` : `|| ${(this.amount/100).toFixed(2)} `)
  result = result.concat(`|| ${(this.balance/100).toFixed(2)}`)
  return result
}
