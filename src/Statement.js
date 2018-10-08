function Statement() {
  this.transactions = []
}

Statement.prototype.store = function(transaction) {
  this.transactions.push(transaction)
}
