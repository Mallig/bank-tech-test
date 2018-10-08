describe('Account', function() {
  var account
  var date 

  beforeEach(function() {
    mockStatement = { transactions: [], store: function(x) { this.transactions.push(x) } }
    mockDate = { toString: function() { return "Mon Oct 08 2018 15:10:40 GMT+0100" } } 
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

    it('should log deposits with timestamp', function() {
      account.deposit(200, mockDate)
      expect(account.statement.transactions).toContain([200, "Mon Oct 08 2018 15:10:40 GMT+0100"])
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
