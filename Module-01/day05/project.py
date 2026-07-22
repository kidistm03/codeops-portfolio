class Account:

    def init(self, owner, number, balance=0):
        self.owner = owner
        self.account_number = number
        self.__balance = balance


    @property
    def balance(self):
        return self.__balance


    def deposit(self, amount):

        if amount <= 0:
            raise ValueError("Amount must be positive")

        self.__balance += amount


    def withdraw(self, amount):

        if amount <= 0:
            raise ValueError("Amount must be positive")

        if amount > self.__balance:
            raise ValueError("Not enough balance")

        self.__balance -= amount


    def statement(self):

        print("Account")
        print("Owner:", self.owner)
        print("Number:", self.account_number)
        print("Balance:", self.balance, "ETB")



class SavingsAccount(Account):

    def init(self, owner, number, balance=0, rate=0.05):

        super().init(owner, number, balance)

        self.rate = rate


    def add_interest(self):

        interest = self.balance * self.rate

        self.deposit(interest)

    def statement(self):

        print("----- Savings Account -----")
        print("Owner:", self.owner)
        print("Number:", self.account_number)
        print("Balance:", self.balance, "ETB")
        print("Interest rate:", self.rate)


class CurrentAccount(Account):

    def init(self, owner, number, balance=0, overdraft=1000):

        super().init(owner, number, balance)

        self.overdraft = overdraft


    def withdraw(self, amount):

        if amount <= 0:
            raise ValueError("Amount must be positive")


        if amount > self.balance + self.overdraft:
            raise ValueError("Overdraft limit exceeded")

        self._Account__balance -= amount

    def statement(self):

        print("----- Current Account -----")
        print("Owner:", self.owner)
        print("Number:", self.account_number)
        print("Balance:", self.balance, "ETB")
        print("Overdraft:", self.overdraft, "ETB")


saving = SavingsAccount("Kidist", "001", 1000, 0.05)

current = CurrentAccount("Abel", "002", 500, 1000)


saving.add_interest()

current.withdraw(1200)

accounts = [saving, current]


for account in accounts:

    account.statement()

    
