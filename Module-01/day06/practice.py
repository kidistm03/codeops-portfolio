class Report:

    def create(self):
        print("Report created")

class ReportSaver:

    def save(self):
        print("Report saved")


class EmailSender:

    def send(self):
        print("Report emailed")

report = Report()
saver = ReportSaver()
email = EmailSender()

report.create()
saver.save()
email.send()
class Shape:

    def area(self):
        pass
class Circle(Shape):

    def area(self):
        print("Circle area calculated")
class Square(Shape):

    def area(self):
        print("Square area calculated")

class Triangle(Shape):

    def area(self):
        print("Triangle area calculated")

shapes = [
    Circle(),
    Square(),
    Triangle()
]
for shape in shapes:
    shape.area()

class AppSettings:

    _instance = None
    def new(cls):

        if cls._instance is None:

            cls._instance = super().new(cls)

            cls._instance.currency = "ETB"

        return cls._instance

settings1 = AppSettings()

settings2 = AppSettings()
print("Currency:", settings1.currency)

print("Same object?", settings1 is settings2)

class FactoryCircle:

    def draw(self):
        print("Circle created")

class FactorySquare:

    def draw(self):
        print("Square created")
class FactoryTriangle:

    def draw(self):
        print("Triangle created")
class ShapeFactory:
    @staticmethod
    def create(kind):

        if kind == "circle":
            return FactoryCircle()

        elif kind == "square":
            return FactorySquare()

        elif kind == "triangle":
            return FactoryTriangle()

        else:
            return None

shape1 = ShapeFactory.create("circle")

shape2 = ShapeFactory.create("square")

shape3 = ShapeFactory.create("triangle")


shape1.draw()

shape2.draw()

shape3.draw()

class NewsAgency:
    def init(self):

        self.subscribers = []


    def add_subscriber(self, subscriber):

        self.subscribers.append(subscriber)
    def publish(self, news):

        for subscriber in self.subscribers:

            subscriber.update(news)
class EmailSubscriber:
    def update(self, news):

        print("Email notification:", news)
class SMSSubscriber:
    def update(self, news):

        print("SMS notification:", news)
agency = NewsAgency()
email_user = EmailSubscriber()

sms_user = SMSSubscriber()


agency.add_subscriber(email_user)

agency.add_subscriber(sms_user)


agency.publish("New Addis Bank service launched")
