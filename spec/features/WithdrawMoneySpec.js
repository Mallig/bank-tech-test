describe('A Client withdraws money from their account', function() {
  var account
  
  beforeEach(function() {
    account = new Account()
    account.balance = 100
  })

  describe('when the withdrawal is valid', function() {
    it('adds the transaction to the statement', function() {
      account.withdraw(50)
      statement = account.printStatement()
      expect(statement).toEqual('date || credit || debit || balance\n14/01/2012 || || 50 || 50')
    })
  })
})
