#1 
class Report:
    def __init__(self, content):
        self.content = content

    def build(self):
        return f"Report: {self.content}"

class ReportSaver:
    def save(self, report):
        print("Saving report...")
        print(report)

class EmailSender:
    def send(self, report):
        print("Sending email...")
        print(report)

report = Report("Monthly sales")
built_report = report.build()

saver = ReportSaver()
saver.save(built_report)
email = EmailSender()
email.send(built_report)

#2
class Shape:
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius * self.radius

class Square(Shape):

    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side
    
class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base
        self.height = height
    def area(self):
        return 0.5 * self.base * self.height

shapes = [
    Circle(5),
    Square(4),
    Triangle(6,3)
]
for shape in shapes:
    print(shape.area())

#3
class AppSettings:
    _instance = None
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance.currency = "ETB"
        return cls._instance

setting1 = AppSettings()
setting2 = AppSettings()
print(setting1.currency)
print(setting2.currency)
print(setting1 is setting2)

#4
class Circle:
    def draw(self):
        print("Drawing Circle")
class Square:
    def draw(self):
        print("Drawing Square")
class Triangle:

    def draw(self):
        print("Drawing Triangle")
class ShapeFactory:
    @staticmethod
    def create(kind):
        if kind == "circle":
            return Circle()
        elif kind == "square":
            return Square()
        elif kind == "triangle":
            return Triangle()
        else:
            return None
        
shape1 = ShapeFactory.create("circle")
shape2 = ShapeFactory.create("square")
shape1.draw()
shape2.draw()

#5
class Subscriber:
    def update(self, news):
        pass

class EmailSubscriber(Subscriber):
    def update(self, news):
        print("Email received:", news)

class SMSSubscriber(Subscriber):
    def update(self, news):
        print("SMS received:", news)

class NewsAgency:
    def __init__(self):
        self.subscribers = []
    def add_subscriber(self, subscriber):
        self.subscribers.append(subscriber)
    def notify(self, news):
        for subscriber in self.subscribers:
            subscriber.update(news)
agency = NewsAgency()
email = EmailSubscriber()
sms = SMSSubscriber()
agency.add_subscriber(email)
agency.add_subscriber(sms)
agency.notify("New iPhone released!")