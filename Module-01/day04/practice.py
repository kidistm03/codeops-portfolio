#practice1
class Book:
    def __init__(self,title,author,pages):
        self.title=title
        self.author=author
        self.pages=pages
    def describe(self):
        print(f"{self.title} is written by {self.author} and have {self.pages}pages")

book1=Book("Fikir Eske Mekabir","Haddis Alemayehu","800")
book2=Book("Dertogada","Yismake Worku",358)
print("practice1 output")
book1.describe()
book2.describe()

#practice2
class product():
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.quantity=quantity
    def restock(self,n):
        self.n=n
        self.quantity += self.n
    def sell(self,n):
        self.n=n
        self.quantity -= self.n

product1=product("shoes",2300,10)
product2=product("dress",3000,20)

product1.restock(5)
product1.sell(10)
print("practice2 output")
print(product1.quantity)


#practice3
class product():
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.__quantity=quantity
    @property
    def quantity(self):
        return self.__quantity
    
    def restock(self,n):
        self.n=n
        self.__quantity += self.n
    def sell(self,n):
        self.n=n
        self.__quantity -= self.n

product1=product("shoes",2300,10)
product2=product("dress",3000,20)

product1.restock(5)
product1.sell(10)
print("practice3 output")
print(product1.quantity)

#practice4
class product():
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.__quantity=quantity
    @property
    def quantity(self):
        return self.__quantity
    
    def restock(self,n):
        self.n=n
        self.__quantity += self.n
    def sell(self,n):
        if n>self.__quantity:
            print("incorrect n value")
        else:
            self.n=n
            self.__quantity -= self.n

product1=product("shoes",2300,10)
product2=product("dress",3000,20)

product1.restock(5)
product1.sell(10)
print("practice4 output")
print(product1.quantity)

#practice5
class product():
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.__quantity=quantity
    @property
    def quantity(self):
        return self.__quantity
    
    def restock(self,n):
        self.n=n
        self.__quantity += self.n
    def sell(self,n):
        if n>self.__quantity:
            print("incorrect n value")
        else:
            self.n=n
            self.__quantity -= self.n

product1=product("shoes",2300,10)
product2=product("dress",3000,20)


product1.restock(5)
product1.sell(10)
print("practice4 output")
print(product1.quantity)

#practice5
class product():
    def __init__(self,name,price,quantity):
        self.name=name
        self.price=price
        self.__quantity=quantity
    @property
    def quantity(self):
        return self.__quantity
    
    def restock(self,n):
        self.n=n
        self.__quantity += self.n
    def sell(self,n):
        if n>self.__quantity:
            print("incorrect n value")
        else:
            self.n=n
            self.__quantity -= self.n

product1=product("shoes",2300,30)
product2=product("dress",3000,20)
product3=product("jacket",3500,15)

product1.sell(10)
print("practice5 output")
print(product1.quantity)
print(product2.quantity)
print(product3.quantity)