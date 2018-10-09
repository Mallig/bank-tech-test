describe('A Client withdraws money from their account', function() {
  var account
  
  beforeEach(function() {
    account = new Account()
    account.balance = 100
  })

  describe('when the withdrawal is valid', function() {
    it('the transaction appears on the statement', function() {
      account.withdraw(50)
      statement = account.printStatement()
      expect(statement).toEqual('date || credit || debit || balance\n09/10/2018 || || 50 || 50')
    })
  })
})
