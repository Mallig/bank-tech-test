function Statement() {
  this.transactions = []
}

Statement.prototype._store = function(transaction) {
  this.transactions.unshift(transaction)
}

Statement.prototype._display = function() {
  result = 'date || credit || debit || balance'
  this.transactions.forEach(function(transaction) {
    result = result.concat('\n', transaction._display())
  })
  return result
}
