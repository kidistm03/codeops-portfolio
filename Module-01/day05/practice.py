#1
class Vehicle():
    def __init__(self,make,model):
        self.make=make
        self.model=model
    def describe(self):
        print(f"{self.make}:{self.model}")
class Car(Vehicle):
    pass

class Truck(Vehicle):
    pass        

print("practice 1 outputs")

car1 = Car("Toyota", "Corolla")
truck1 = Truck("Volvo", "FH")

car1.describe()
truck1.describe()

#2
class Vehicle():
    def __init__(self,make,model):
        self.make=make
        self.model=model
    def describe(self):
        print(f"{self.make}:{self.model}")
class Car(Vehicle):
    pass

class Truck(Vehicle):
    def __init__(self, make, model,capacity):
        super().__init__(make, model)   
        self.capacity=capacity   
print("practice 2 outputs")

car1 = Car("Toyota", "Corolla")
truck1 = Truck("Volvo", "FH",10)

car1.describe()
truck1.describe()

#3
class Vehicle():
    def __init__(self,make,model):
        self.make=make
        self.model=model
    def describe(self):
        print(f"{self.make}:{self.model}")
class Car(Vehicle):
    pass

class Truck(Vehicle):
    def __init__(self, make, model,capacity):
        super().__init__(make, model)   
        self.capacity=capacity  
    def describe(self):
        print(f"{self.make}: {self.model}: {self.capacity}") 

print("practice 3 outputs")

car1 = Car("Toyota", "Corolla")
truck1 = Truck("Volvo", "FH",10)

car1.describe()
truck1.describe()

#4
class Vehicle():
    def __init__(self,make,model):
        self.make=make
        self.model=model
    def describe(self):
        print(f"{self.make}:{self.model}")
class Car(Vehicle):
    pass

class Truck(Vehicle):
    def __init__(self, make, model,capacity):
        super().__init__(make, model)   
        self.capacity=capacity  
    def describe(self):
        print(f"{self.make}: {self.model}: {self.capacity}") 

print("practice 4 outputs")
car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")
truck1 = Truck("Volvo", "FH",10)
vehicles = [car1, car2, truck1]

for vehicle in vehicles:
    vehicle.describe()

#5
from abc import ABC, abstractmethod


class Vehicle(ABC):

    def __init__(self, make, model):
        self.make = make
        self.model = model

    def describe(self):
        print(f"Make: {self.make}")
        print(f"Model: {self.model}")

    @abstractmethod
    def wheels(self):
        pass


class Car(Vehicle):

    def wheels(self):
        return 4


class Truck(Vehicle):

    def __init__(self, make, model, capacity):
        super().__init__(make, model)
        self.capacity = capacity

    def describe(self):
        print(f"Make: {self.make}")
        print(f"Model: {self.model}")
        print(f"Capacity: {self.capacity} tons")

    def wheels(self):
        return 6

print("practice5 output")
car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")
truck1 = Truck("Volvo", "FH", 10)

vehicles = [car1, car2, truck1]

for vehicle in vehicles:
    vehicle.describe()
    print("Wheels:", vehicle.wheels())
    print()