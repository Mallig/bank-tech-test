function Statement() {
  this.transactions = []
}

Statement.prototype.store = function(transaction) {
  this.transactions.push(transaction)
}

Statement.prototype.display = function() {
  result = 'date || credit || debit || balance'
  this.transactions.forEach(function(transaction) {
    result = result.concat('\n', transaction._display())
  })
  return result
}
