class BankConfig:
    _instance = None
    def new(cls):
        if cls._instance is None:

            cls._instance = super().new(cls)

            cls._instance.interest_rate = 0.05
            cls._instance.overdraft = 1000

        return cls._instance

class SMSAlert:

    def update(self, message):
        print("SMS:", message)

class AuditLog:

    def update(self, message):
        print("LOG:", message)

class Account:

    def init(self, owner, number, balance=0):

        self.owner = owner
        self.number = number
        self.__balance = balance

        self.observers = []

    @property
    def balance(self):
        return self.__balance
    def subscribe(self, observer):

        self.observers.append(observer)

    def notify(self, message):

        for observer in self.observers:

            observer.update(message)

    def deposit(self, amount):

        self.__balance += amount

        self.notify(
            f"{self.owner} deposited {amount} ETB"
        )
    def withdraw(self, amount):

        if amount > self.__balance:

            print("Not enough money")
        else:
            self.__balance -= amount

            self.notify(
                f"{self.owner} withdrew {amount} ETB"
            )
    def statement(self):

        print(
            self.owner,
            self.number,
            self.balance,
            "ETB"
        )

class SavingsAccount(Account):

    def init(self, owner, number, balance):

        super().init(owner, number, balance)

        config = BankConfig()

        self.rate = config.interest_rate
    def add_interest(self):

        interest = self.balance * self.rate

        self.deposit(interest)

class CurrentAccount(Account):

    def init(self, owner, number, balance):

        super().init(owner, number, balance)

        config = BankConfig()

        self.limit = config.overdraft
    def withdraw(self, amount):

        if amount <= self.balance + self.limit:

            self._Account__balance -= amount

            self.notify(
                f"{self.owner} withdrew {amount} ETB"
            )

        else:

            print("Overdraft limit reached")

class AccountFactory:
    @staticmethod
    def create(type, owner, number, balance):

        if type == "saving":

            return SavingsAccount(
                owner,
                number,
                balance
            )
        elif type == "current":

            return CurrentAccount(
                owner,
                number,
                balance
            )

sms = SMSAlert()
log = AuditLog()
account1 = AccountFactory.create(
    "saving",
    "Kidist",
    "001",
    1000
)
account2 = AccountFactory.create(
    "current",
    "Abel",
    "002",
    500
)

account1.subscribe(sms)
account1.subscribe(log)

account2.subscribe(sms)
account2.subscribe(log)

account1.deposit(500)

account1.add_interest()

account2.withdraw(1000)
print()

account1.statement()

account2.statement()
