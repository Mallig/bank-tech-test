describe('Statement', function() {
  var statement
  var mockTransaction

  beforeEach(function() {
    statement = new Statement()
    mockTransaction = { _display: function() { return '14/01/2012 || 50.00 || || 50.00' } }
  })

  it('should store transactions', function() {
    statement._store(mockTransaction)
    expect(statement.transactions).toContain(mockTransaction)
  })
  
  it('can print a statement', function() {
    statement._store(mockTransaction)
    var printout = statement._display()
    expect(printout).toEqual('date || credit || debit || balance\n14/01/2012 || 50.00 || || 50.00')
  })
})
