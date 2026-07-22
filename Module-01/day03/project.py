stock = {}

try:
    with open("pharmacy.txt") as f:
        for line in f:
            item,qty = line.strip().split(",")
            stock[item] = int(qty)

except FileNotFoundError:
    print("No stock file yet ")


def adjust(item, amount):
    stock[item] = stock.get(item, 0) + amount


adjust("VitaminC", -3)


for item, qty in stock.items():
    if qty < 10:
        print(f"Low stock: {item}: {qty}")


with open("pharmacy.txt", "w") as file:
    for item, qty in stock.items():
        file.write(f"{item},{qty}\n")
