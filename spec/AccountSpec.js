describe('Account', function() {
  var account

  beforeEach(function() {
    function mockTransaction() {  }
    mockStatement = { transactions: [], _store: function(x) { this.transactions.push(x) } }
    account = new Account(mockStatement, mockTransaction)
  })

  it('should initialise with a balance of zero', function() {
    expect(account.balance).toEqual(0)
  })

  describe('deposit', function() {
    it('should increase the account balance', function() {
      account.deposit(200)
      expect(account.balance).toEqual(20000)
    })

    it('should accept numbers as strings', function() {
      account.deposit("200")
      expect(account.balance).toEqual(20000)
    })

    it('should only accept amounts with up to two decimal places', function() {
      account.deposit(200.111)
      expect(account.balance).toEqual(0)
    })
    
    it('should only accept positive numbers', function() {
      account.deposit(-200)
      expect(account.balance).toEqual(0)
    })
  })

  describe('withdraw', function() {
    beforeEach(function() {
      account.deposit(200)
    })

    it('should reduce the account balance', function() {
      account.withdraw(50)
      expect(account.balance).toEqual(15000)
    })

    it('should accept numbers as strings', function() {
      account.withdraw("50")
      expect(account.balance).toEqual(15000)
    })

    it('should only accept numbers with up to two decimal places', function() {
      account.withdraw(50.111)
      expect(account.balance).toEqual(20000)
    })

    it('should only accept positive numbers', function() {
      account.withdraw(-50)
      expect(account.balance).toEqual(20000)
    })

    it('should not reduce balance past zero', function() {
      account.withdraw(250)
      expect(account.balance).toEqual(20000)
    })
  })
})
