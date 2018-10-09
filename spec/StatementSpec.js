describe('Statement', function() {
  var statement
  var mockTransaction

  beforeEach(function() {
    statement = new Statement()
    mockTransaction = { // type: function() { return 'deposit' },
    //                   amount: function() { return 50 },
    //                  balance: function() { return 50 },
    //                     date: function() { return "14/01/2012" },
                    _display: function() { return '14/01/2012 || 50 || || 50' }
                    }
  })

  it('should store transactions', function() {
    statement.store(mockTransaction)
    expect(statement.transactions).toContain(mockTransaction)
  })
  
  it('can print a statement', function() {
    statement.store(mockTransaction)
    var printout = statement.display()
    expect(printout).toEqual('date || credit || debit || balance\n14/01/2012 || 50 || || 50')
  })
})
