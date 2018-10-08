describe('Printed Statement', function() {
  var statement
  var transaction

  beforeEach(function() {
    statement = new Statement()
    transaction = new Transaction(amount = 200, type = 'deposit', date = '14/01/2012')
    statement.store(transaction)
  })

  it('displays transaction history', function() {
    printout = statement.display()
    console.log(statement.transactions)
    expect(printout).toEqual('date || credit || debit || balance\n14/01/2012||200||||200')
  })
})
