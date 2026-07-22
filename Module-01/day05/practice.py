
from abc import ABC, abstractmethod


class Vehicle(ABC):

    def init(self, make, model):
        self.make = make
        self.model = model


    def describe(self):
        print(f"{self.make} {self.model}")

    @abstractmethod
    def wheels(self):
        pass





class Car(Vehicle):

    def wheels(self):
        return 4


class Truck(Vehicle):

    def init(self, make, model, capacity):

        super().init(make, model)

        self.capacity = capacity

    def describe(self):

        print(
            f"{self.make} {self.model}, Capacity: {self.capacity} tons"
        )


    def wheels(self):
        return 6


car1 = Car("Toyota", "Corolla")

truck1 = Truck("Volvo", "FH16", 20)

car2 = Car("Honda", "Civic")



# 4. Polymorphism

vehicles = [car1, truck1, car2]


for vehicle in vehicles:

    vehicle.describe()

    print("Wheels:", vehicle.wheels())

