class Account:
    def __init__(self, owner, account_number, balance):
        self.owner = owner
        self.account_number = account_number
        self.__balance = balance

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, value):
        if value < 0:
            self.__balance = value
        else:
            self.__balance = value

    def deposit(self, amount):
        if amount <= 0:
            print("Amount must be positive.")
            return
        self.__balance += amount

    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be positive.")
            return

        if amount > self.__balance:
            print("Your balance is not sufficient")
            return

        self.__balance -= amount

    def statement(self):
        print("Account")
        print(f"Owner: {self.owner}")
        print(f"Balance: {self.balance}")


class SavingsAccount(Account):

    def __init__(self, owner, account_number, balance, rate):
        super().__init__(owner, account_number, balance)
        self.rate = rate

    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)

    def statement(self):
        print("Savings Account")
        print(f"Owner: {self.owner}")
        print(f"Balance: {self.balance}")


class CurrentAccount(Account):

    def __init__(self, owner, account_number, balance, overdraft):
        super().__init__(owner, account_number, balance)
        self.overdraft = overdraft

    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be positive.")
        elif amount <= self.balance + self.overdraft:
            self.balance -= amount
        else:
            print("Overdraft limit exceeded")
    def statement(self):
        print("Current Account")
        print(f"Owner: {self.owner}")
        print(f"Balance: {self.balance}")


# for Day 4 
print("Day 4 ")

account1 = Account("Kidist", 10002121, 5000)
account2 = Account("Tsion", 10003321, 7000)

print(account1.balance)

account1.deposit(1000)
print(account1.balance)

account1.withdraw(200)
print(account1.balance)

print(account2.owner)

account2.deposit(-500)
print(account2.balance)


# for Day 5 

print("\nDay 5 ")

account1 = SavingsAccount("Kidist", 10002121, 5000, 0.05)
account2 = CurrentAccount("Tsion", 10003321, 7000, 1000)

account1.add_interest()

account2.withdraw(7500)

accounts = [account1, account2]

for account in accounts:
    account.statement()
    print()