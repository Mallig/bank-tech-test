describe('A Client deposits money into their account', function() {
  var account

  beforeEach(function() {
    account = new Account()
  })

  describe('when the deposit is valid', function() {
    it('appears on the statement', function() {
      account.deposit(50)
      statement = account.printStatement()
      expect(statement).toEqual('date || credit || debit || balance\n09/10/2018 || 50 || || 50')
    })
  })
})
