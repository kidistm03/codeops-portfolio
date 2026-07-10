temperature=float(input("Enter the temprature in C: "))
if temperature < 15:
    print("cold")
elif temperature<=28:
    print("warm")
else:
    print("hot")


for number in range(1,11):
    print(f"Receipt #{number}")

for number in range(1,21):
    if number % 2 == 0:
        print(number)

def apply_discount(price, percent=10):
    discount=price*percent/100
    return price-discount
print(apply_discount(1000))
print(apply_discount(1500,15))

number=5
while number>=1:
    print(number)
    number-=1
print("Liftoff!")