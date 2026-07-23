class BankConfig:

    _instance = None
    def __new__(cls):

        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.interest_rate = 0.05
            cls._instance.overdraft_limit = 1000

        return cls._instance
class SMSAlert:
    def update(self, message):
        print("SMS:", message)
class AuditLog:
    def update(self, message):
        print("LOG:", message)
class Account:

    def __init__(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance

        self.observers = []
        self.history = []

    @property
    def balance(self):
        return self.__balance

    def subscribe(self, observer):
        self.observers.append(observer)

    def _notify(self, message):
        for observer in self.observers:
            observer.update(message)

    def deposit(self, amount):
        if amount <= 0:
            print("Invalid amount")
            return

        self.__balance += amount
        self.history.append(("deposit", amount))
        self._notify(f"{self.owner} deposited {amount} ETB")

    def withdraw(self, amount):
        if amount > self.__balance:
            print("Insufficient balance")
            return
        self.__balance -= amount
        self.history.append(("withdraw", amount))
        self._notify(f"{self.owner} withdrew {amount} ETB")

    def undo_last(self):
        if len(self.history) == 0:
            print("No transaction to undo")
            return
        action, amount = self.history.pop()
        if action == "deposit":
            self.__balance -= amount
        elif action == "withdraw":
            self.__balance += amount
        print("Last transaction undone.")

    def statement(self):
        print(self.owner, self.account_number, self.balance, "ETB")


class SavingsAccount(Account):
    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)
        self.rate = BankConfig().interest_rate

    def add_interest(self):
        interest = self.balance * self.rate
        self.deposit(interest)
    def statement(self):
        print("Savings Account")
        super().statement()

class CurrentAccount(Account):

    def __init__(self, owner, number, balance=0):
        super().__init__(owner, number, balance)
        self.limit = BankConfig().overdraft_limit

    def withdraw(self, amount):
        if self.balance - amount < -self.limit:
            print("Overdraft limit reached")
            return

        self._Account__balance -= amount
        self.history.append(("withdraw", amount))
        self._notify(f"{self.owner} withdrew {amount} ETB")

    def statement(self):
        print("Current Account")
        super().statement()

class AccountFactory:
    @staticmethod
    def create(kind, owner, number, balance=0):
        if kind == "savings":
            return SavingsAccount(owner, number, balance)

        elif kind == "current":
            return CurrentAccount(owner, number, balance)

        else:
            raise ValueError("Wrong account type")

class AccountRegistry:
    def __init__(self):
        self.by_number = {}
        self.order = []

    def add(self, account):
        self.by_number[account.account_number] = account
        self.order.append(account.account_number)

    def find(self, number):
        return self.by_number.get(number)

    def list_all(self):
        for number in self.order:
            account = self.by_number[number]
            account.statement()

registry = AccountRegistry()
account1 = AccountFactory.create(
    "savings",
    "Kidist",
    101,
    1000
)
account2 = AccountFactory.create(
    "current",
    "Abel",
    102,
    500
)

registry.add(account1)
registry.add(account2)
sms = SMSAlert()
log = AuditLog()
account1.subscribe(sms)
account1.subscribe(log)
account2.subscribe(sms)
account2.subscribe(log)
account1.deposit(500)
account1.withdraw(200)
print("Balance:", account1.balance)
account1.undo_last()
print("Balance after undo:", account1.balance)

found = registry.find(101)
print("Found Account:")
found.statement()

print("All Accounts")
registry.list_all()

config1 = BankConfig()
config2 = BankConfig()
print("Singleton:", config1 is config2)
