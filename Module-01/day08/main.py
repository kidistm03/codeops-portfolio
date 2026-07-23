class AlertService:
    def update(self, message):
        print(f"[SMS Alert] {message}")
class Account:
    def __init__(self, owner, account_number, balance):
        self.owner = owner
        self.account_number = account_number
        self.__balance = balance
        self._observers = []
        self.history = []
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
        self.history.append(("Deposit", amount))
        self._notify(f"{self.owner} deposited {amount} ETB")
    def withdraw(self, amount):
        if amount <= 0:
            print("Amount must be positive.")
            return
        if amount > self.__balance:
            print("Insufficient balance")
            return
        self.__balance -= amount
        self.history.append(("Withdraw", amount))
        self._notify(f"{self.owner} withdrew {amount} ETB")
    def undo_last(self):
        if len(self.history) == 0:
            print("No transaction to undo.")
            return
        transaction, amount = self.history.pop()
        if transaction == "Deposit":
            self.balance -= amount

        elif transaction == "Withdraw":
            self.balance += amount
        print(f"Undo {transaction}: {amount} ETB")
    def statement(self):
        print("Account")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
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
        print(f"Account Number: {self.account_number}")
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
            self.balance -= amount
            self.history.append(("Withdraw", amount))
            self._notify(f"{self.owner} withdrew {amount} ETB")
        else:
            print("Overdraft limit exceeded")

    def statement(self):
        print("Current Account")
        print(f"Owner: {self.owner}")
        print(f"Account Number: {self.account_number}")
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

def binary_search(numbers, target):
    left = 0
    right = len(numbers) - 1

    while left <= right:

        middle = (left + right) // 2

        if numbers[middle] == target:
            return middle

        elif numbers[middle] < target:
            left = middle + 1

        else:
            right = middle - 1

    return -1

def recursive_total(history):

    if len(history) == 0:
        return 0
    transaction, amount = history[0]
    return amount + recursive_total(history[1:])

class AccountRegistry:

    def __init__(self):
        self.accounts = {}

    def add(self, account):
        self.accounts[account.account_number] = account

    def find(self, account_number):
        return self.accounts.get(account_number)

    def list_all(self):
        return self.accounts.values()

    def top_by_balance(self, n=5):
        accounts = sorted(
            self.accounts.values(),
            key=lambda account: account.balance,
            reverse=True
        )
        return accounts[:n]
    def find_by_number(self, number):
        numbers = sorted(self.accounts.keys())
        index = binary_search(numbers, number)
        if index == -1:
            return None

        return self.accounts[numbers[index]]
    def total_transactions(self, number):
        account = self.find_by_number(number)
        if account is None:
            return 0

        return recursive_total(account.history)

sms = AlertService()
registry = AccountRegistry()
account1 = AccountFactory.create("savings","Kidist",10002121,5000)
account2 = AccountFactory.create("current","Tsion",10003321,7000)
account3 = AccountFactory.create("savings","Abel",10004444,9000)

account1.subscribe(sms)
account2.subscribe(sms)
account3.subscribe(sms)

registry.add(account1)
registry.add(account2)
registry.add(account3)

account1.deposit(1000)
account1.add_interest()
account2.withdraw(7500)
account3.deposit(500)
print("\nFind Account")
found = registry.find(10002121)
if found:
    found.statement()
print("\nAll Accounts")

for account in registry.list_all():
    account.statement()
    print()

print("Transaction History")
print(account1.history)

print("\nUndo Last Transaction")
account1.undo_last()

print("\nHistory After Undo")
print(account1.history)

print("\nFinal Balance")
print(account1.balance)
print("\nTop Accounts")
top = registry.top_by_balance()
for account in top:
    account.statement()
    print()
print("Search Using Binary Search")
found = registry.find_by_number(10003321)

if found:
    found.statement()
print("\nTotal Transactions of Account 10002121")
print(registry.total_transactions(10002121))
