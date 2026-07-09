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