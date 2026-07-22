stock = {}

try:
    with open("pharmacy.txt", "r") as file:

        for line in file:
            item, quantity = line.strip().split(",")

            stock[item] = int(quantity)

except FileNotFoundError:
    print("No stock file found. Starting with empty stock.")


def adjust(item, amount):

    if item in stock:
        stock[item] = stock[item] + amount
    else:
        stock[item] = amount


adjust("Paracetamol", -3)  
adjust("VitaminC", 5)       



print("Low stock items:")

for item, quantity in stock.items():

    if quantity < 10:
        print(item, "=", quantity)



with open("pharmacy.txt", "w") as file:

    for item, quantity in stock.items():

        file.write(item + "," + str(quantity) + "\n")


print("Stock updated successfully!")
