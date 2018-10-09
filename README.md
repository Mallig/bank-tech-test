## Bank Tech Test

### Introduction

This has been written as a practice tech test, the first review taking place after two days on the project.

Stack:
* Written in Javascript
* Tested with Jasmine
* No front end UI
* No back end database

### Requirements

* Interact with code through IRB/JS console.
* Data is stored in memory, rather than a database.
* Clients make deposits and witdrawals.
* Clients can see their account statements.

#### User Stories

```
As a cog in the machine
So that my money is secure
I can deposit it at a bank
```
```
As a big spender
So that I can buy nice things
I can withdraw my money from the bank
```
```
As an organised person
So that I can track my finances
I can see a statement of recent transactions
```
#### Class Responsibility Collaborator Cards

Client

```
Responsibility       | Collaborator
-----------------------------------
Has an account       | 
Can deposit/withdraw |
  from account       |
```

Account

```
Responsibility          | Collaborator
--------------------------------------
Has a balance           | Client
Can increase/decrease   | 
  balance               |
Displays transaction    |
  history               |
```

Statement

```
Responsibility    | Collaborator
--------------------------------
Has a list of     | Account
  transactions    |
Can print the     |
  transactions    |
Is associated     |
  with an account |
```

Transaction

```
Responsibility           | Collaborator
---------------------------------------
The transaction type     | Statement
The change in balance    | 
When it happens          |
The amount involved      |
Is stored on the account |
  statement              |
```


### Code

This code uses three classes, Account, Statement, and Transaction. Accounts initialise with a fresh statement and the transaction constructor, each time a deposit or withdrawal is made an instance of Transaction is stored in the account Statement.

Transaction instances have state describing the amount involved, the type of transaction, the date it occurred, and the balance of the account after the transaction passes. Transactions also have a single method for displaying themselves in a format for the statement.

Statements every transaction that has occurred on the account. A statement can store a transaction in its `.transactions` array, and display all transactions with a header: `date || credit || debit || balance`. 

Accounts have three public methods, `deposit`, `withdraw`, and `printStatement`. When an amount is passed to the deposit/withdraw methods the program makes a series of validity checks to ensure the transaction is allowed before modifying the account balance and storing a transaction in the statement. The account balance is maintained as a count of pennies rather than pounds, so there are only integers being manipulated behind the scenes. Deopsits and withdrawals are requested in pounds with pennies and converted by the program.



### Interacting with the Program

A user can create a new account in the console by typing `var newAccount = new Account()`

Deposits are made by typing `newAccount.deposit(xxx.xx)`, 
withdrawals are made by typing `newAccount.withdraw(xxx.xx)`

The account statement can be displaye with `newAccount.printStatement()`

