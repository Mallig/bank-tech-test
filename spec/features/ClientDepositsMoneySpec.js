describe('A Client deposits money into their account', function() {
  var account
  var currentDate

  beforeEach(function() {
    account = new Account()
    currentDate = new Date().toLocaleDateString()
  })

  describe('when the deposit is valid', function() {
    it('the transaction appears on the statement', function() {
      account.deposit(50)
      statement = account.printStatement()
      expect(statement).toEqual(`date || credit || debit || balance\n${currentDate} || 50 || || 50`)
    })
  })
})
