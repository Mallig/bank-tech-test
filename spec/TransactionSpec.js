describe('Transaction', function() {
  beforeEach(function() {
    depositTransaction = new Transaction('deposit', 200, 'today')
  })

  it('has a date/time stamp', function() {
    expect(transaction.time).toEqual('today')
  })
})
