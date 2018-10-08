describe('Statement', function() {
  var statement
  var mockTransaction

  beforeEach(function() {
    statement = new Statement()
    mockTransaction = { type: function() { return 'deposit' },
                      amount: function() { return 50 },
                        date: function() { return "Mon Oct 08 2018 15:10:40 GMT+0100" }
                    }
  })

  it('should store transactions', function() {
    statement.store(mockTransaction)
    expect(statement.transactions).toContain(mockTransaction)
  })
})
