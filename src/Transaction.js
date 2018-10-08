function Transaction(amount, type, date = new Date().toLocaleDateString(), balance) {
  this.date = date
  this.amount = amount
  this.type = type
  this.balance = balance
}
