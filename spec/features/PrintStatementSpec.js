describe('Printed Statement', function() {
  var account

  beforeEach(function() {
    account = new Account()
  })

  it('displays transaction history', function() {
    account.deposit(200)
    var printout = account.printStatement()
    expect(printout).toEqual('date || credit || debit || balance\n09/10/2018 || 200 || || 200')
  })
  it('displays transactions in reverse chronological order', function() {
    account.deposit(100)
    account.withdraw(50)
    var printout = account.printStatement()
    expect(printout).toEqual('date || credit || debit || balance\n09/10/2018 || || 50 || 50\n09/10/2018 || 100 || || 100')
  })
})
