describe('Account', function() {
  var account

  beforeEach(function() {
    account = new Account()
  })

  it('should initialise with a balance of zero', function() {
    expect(account.balance).toEqual(0)
  })

  it('should accept a deposit', function() {
    account.deposit(200)
    expect(account.balance).toEqual(200)
  })
})
