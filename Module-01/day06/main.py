class AlertService:
    def update(self, message):
        print(f"[SMS Alert] {message}")


class Account:
    def __init__(self, owner, account_number, balance):
        self.owner = owner
        self.account_number = account_number
        self.__balance = balance
        self._observers = []

    @property
    def balance(self):
        return self.__balance

    @balance.setter
    def balance(self, value):
        self.__balance = value

    def subscribe(self, observer):
        self._observers.append(observer)

    def _notify(self, message):
        for observer in self._observers:
            observer.update(message)

    def deposit(self, amount):
        if amount <= 0:
            print("Amount must be positive.")
            return

        self.__balance += amount
        self._notify(f"{self.owner} deposited {amount} ETB")

    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be positive.")
            return

        if amount > self.__balance:
            print("Insufficient balance")
            return

        self.__balance -= amount
        self._notify(f"{self.owner} withdrew {amount} ETB")

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
        print(f"Interest Rate: {self.rate}")


class CurrentAccount(Account):

    def __init__(self, owner, account_number, balance, overdraft):
        super().__init__(owner, account_number, balance)
        self.overdraft = overdraft

    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be positive.")
            return

        if amount <= self.balance + self.overdraft:
            self.balance = self.balance - amount
            self._notify(f"{self.owner} withdrew {amount} ETB")
        else:
            print("Overdraft limit exceeded")

    def statement(self):
        print("Current Account")
        print(f"Owner: {self.owner}")
        print(f"Balance: {self.balance}")
        print(f"Overdraft: {self.overdraft}")


class AccountFactory:

    @staticmethod
    def create(kind, owner, account_number, balance):

        if kind == "savings":
            return SavingsAccount(owner, account_number, balance, 0.05)

        elif kind == "current":
            return CurrentAccount(owner, account_number, balance, 1000)

        else:
            raise ValueError("Invalid account type")


#  MAIN PROGRAM 

sms = AlertService()

account1 = AccountFactory.create(
    "savings",
    "Kidist",
    10002121,
    5000
)

account2 = AccountFactory.create(
    "current",
    "Tsion",
    10003321,
    7000
)

account1.subscribe(sms)
account2.subscribe(sms)

account1.deposit(1000)
account1.add_interest()

account2.withdraw(7500)

accounts = [account1, account2]

print("\nStatements\n")

for account in accounts:
    account.statement()
    print()