describe('Transaction', function() {
  beforeEach(function() {
    depositTransaction = new Transaction(time = 'today', amount = 50, type = 'deposit')
  })

  it('has a date/time stamp', function() {
    expect(depositTransaction.time).toEqual('today')
  })

  it('has a transaction amount', function() {
    expect(depositTransaction.amount).toEqual(50)
  })

  it('has a transaction type', function() {
    expect(depositTransaction.type).toEqual('deposit')
  })
})
