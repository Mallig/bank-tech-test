describe('Account', function() {
  var account

  beforeEach(function() {
    account = new Account()
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
  })


})
