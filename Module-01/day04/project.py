class Account():
    def __init__(self,owner,account_number,balance=0):
        self.owner=owner
        self.account_number=account_number
        self.__balance=balance
    @property
    def balance(self):
        return self.__balance
    def deposit(self,amount):
        if amount<=0:
            raise ValueError("Amount must be positive")
        else:
            self.__balance += amount
    def withdraw(self,amount):
        if amount<=0:
            print ("Amount must be positive")
            return
        if amount > self.__balance:  #this is overdrift
            print("insufficient balance")
            return
        else:
            self.__balance -= amount
    def statement(self):
        print(f"{self.owner}'s account number is {self.account_number} and has {self.__balance}ETB")

account1=Account("kidist",1000111,1000)
account1.deposit(500)
account1.withdraw(100)

account1.statement()