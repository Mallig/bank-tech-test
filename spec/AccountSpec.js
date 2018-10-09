describe('Account', function() {
  var account
  // var mockDate 

  beforeEach(function() {
    mockStatement = { transactions: [], _store: function(x) { this.transactions.push(x) } }
    account = new Account(mockStatement)
  })

  it('should initialise with a balance of zero', function() {
    expect(account.balance).toEqual(0)
  })

  describe('deposit', function() {
    it('should accept a deposit', function() {
      account.deposit(200)
      expect(account.balance).toEqual(200)
    })

    it('should only accept integers', function() {
      expect(function() {account.deposit("200")}).toThrow('Invalid deposit amount')
    })
    
    it('should only accept positive numbers', function() {
      expect(function() {account.deposit(-200)}).toThrow('Invalid deposit amount')
    })
  })

  describe('withdraw', function() {
    beforeEach(function() {
      account.deposit(200)
    })

    it('should reduce the account balance', function() {
      account.withdraw(50)
      expect(account.balance).toEqual(150)
    })

    it('should only accept integers', function() {
      expect(function() {account.withdraw("50")}).toThrow('Invalid withdrawal amount')
    })

    it('should only accept positive numbers', function() {
      expect(function() {account.withdraw(-50)}).toThrow('Invalid withdrawal amount')
    })

    it('should not reduce balance past zero', function() {
      expect(function() {account.withdraw(250)}).toThrow('Invalid withdrawal amount')
    })
  })
})
