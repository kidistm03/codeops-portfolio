
customers = [
("Almaz", 1500), ("Dawit", 700), ("Tigist", 200),
("Hanna", 1200), ("Samuel", 450),
]
def tier(balance):
    if balance >= 1000:
        return "Premium"
    elif balance >= 500:
        return "Standard"
    return "Basic"
for name, balance in customers:
    customer = tier(balance)

    print(name, "-", customer, "-", balance, "ETB")

    if customer == "Premium":
        premium += 1
    elif customer == "Standard":
        standard += 1
    else:
        basic += 1


print()
print("number of premium customers: ", premium)
print("number of Standard customers: ", standard)
print("number of Basic customers: ", basic)