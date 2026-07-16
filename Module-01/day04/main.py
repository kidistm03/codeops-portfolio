class Account:
    def __init__(self,owner,account_number,balance):
        self.owner=owner
        self.account_number=account_number
        self.__balance=balance
    @property
    def balance(self):
        return self.__balance
    def withdraw(self,amount):
        if amount <= 0:
            print("Amount must be positive.")
            return
        if amount> self.__balance:
            print("your balance is  not sufficient")
            return
        else:
            self.__balance -=amount
    def deposit(self,amount):
        if amount <= 0:
            print("Amount must be positive.")
            return
        self.__balance += amount
    @balance.setter
    def balance(self,value):
        if value<0:
            print("can't enter negative value")
        else:
            self.__balance=value

    
account1=Account("kidist",10002121,5000)
account2=Account("Tsion",10003321,7000)

print(account1.balance)

account1.deposit(1000)
print(account1.balance)

account1.withdraw(200)
print(account1.balance)

print(account2.owner)

account2.deposit(-500)
print(account2.balance)