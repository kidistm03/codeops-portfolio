class Account:
    def __init__(self, owner, account_number, balance=0):
        self.owner = owner
        self.account_number = account_number
        self.__balance = balance

    @property
    def balance(self):
        return self.__balance
    def _change_balance(self, amount):
        self.__balance += amount

    def deposit(self, amount):
        if amount <= 0:
            print("Amount must be positive")
            return

        self._change_balance(amount)

    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be positive")
            return

        if amount > self.balance:
            print("Insufficient balance")
            return

        self._change_balance(-amount)

    def statement(self):
        print("Account")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.balance} ETB")

class SavingsAccount(Account):
    def __init__(self, owner, account_number, balance=0, rate=0.05):
        super().__init__(owner, account_number, balance)
        self.rate = rate

    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)

    def statement(self):
        print("Savings Account")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.balance} ETB")
        print(f"Interest Rate: {self.rate}")


class CurrentAccount(Account):
    def __init__(self, owner, account_number, balance=0, overdraft=1000):
        super().__init__(owner, account_number, balance)
        self.overdraft = overdraft

    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be positive")
            return

        if self.balance - amount < -self.overdraft:
            print("Overdraft limit exceeded")
            return

        self._change_balance(-amount)

    def statement(self):
        print("Current Account")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
        print(f"Balance: {self.balance} ETB")
        print(f"Overdraft Limit: {self.overdraft} ETB")

account1 = Account("Kidist", 1001, 1000)

account2 = SavingsAccount("Abel", 1002, 2000)
account2.add_interest()

account3 = CurrentAccount("Sara", 1003, 500)
account3.withdraw(1200)      
account3.withdraw(1000)      

accounts = [account1, account2, account3]

for account in accounts:
    account.statement()