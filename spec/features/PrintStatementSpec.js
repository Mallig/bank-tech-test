describe('Printed Statement', function() {
  var account
  var currentDate

  beforeEach(function() {
    account = new Account()
    currentDate = new Date().toLocaleDateString()
  })

  it('displays transaction history', function() {
    account.deposit(200)
    var printout = account.printStatement()
    expect(printout).toEqual(`date || credit || debit || balance\n${currentDate} || 200.00 || || 200.00`)
  })
  it('displays transactions in reverse chronological order', function() {
    account.deposit(100)
    account.withdraw(50)
    var printout = account.printStatement()
    expect(printout).toEqual(`date || credit || debit || balance\n${currentDate} || || 50.00 || 50.00\n${currentDate} || 100.00 || || 100.00`)
  })
})
