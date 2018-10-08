describe('Transaction', function() {
  beforeEach(function() {
    depositTransaction = new Transaction(time = 'today')
  })

  it('has a date/time stamp', function() {
    expect(depositTransaction.time).toEqual('today')
  })
})
