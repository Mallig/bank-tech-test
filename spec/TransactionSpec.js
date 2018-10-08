describe('Transaction', function() {
  beforeEach(function() {
    depositTransaction = new Transaction(amount = 50, type = 'deposit', date = 'today', balance = 50)
  })

  it('has a date/time stamp', function() {
    expect(depositTransaction.date).toEqual('today')
  })

  it('has a transaction amount', function() {
    expect(depositTransaction.amount).toEqual(50)
  })

  it('has a transaction type', function() {
    expect(depositTransaction.type).toEqual('deposit')
  })

  it('remembers account balance upon completion', function() {
    expect(depositTransaction.balance).toEqual(50)
  })
})
