bill_total = 650
number_of_people = 4

names = ["Kidist", "Tsion", "Meseret", "liha"]


def split_bill(total, people, tip_rate=0.10):
    total_bill = total + (total * tip_rate)
    return total_bill / people


share = split_bill(bill_total, number_of_people)


for name in names:
    print(name, "should pay", share, "ETB")