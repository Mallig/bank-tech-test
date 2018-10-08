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
------------------------------------
Has an account       | Account
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
Timestamps transactions |
Displays transaction    |
  history               |

```

Is a 'Transaction' Class overkill here?
Is a 'Statement' Class overkill here?

### Code

Clients will access their accounts through the console, actions on the account will be limited to 'deposit', 'withdraw', and 'statement'.
Accounts will not have any form of security.
