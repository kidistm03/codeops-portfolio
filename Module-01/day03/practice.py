#practice 1
cities=["addis ababa","hawassa","adama","addis ababa","addis ababa","hawassa"]
city=set(cities)
print(city)
number=len(city)
print(number)



#practice 2
price={
    "bread":150,
    "milk":75,
    "tea":50,
    "coffee":1000,
    "biscuit":30
}

for item,prices in price.items():
    print(f"{item}:{prices}ETB")



#practice 3
prices = [100, 250, 400, 80]
with_tax = [price * 1.15 for price in prices]
print(with_tax)



#practice 4
prices = [100, 250, 400, 80]
cheap = [price for price in prices if price < 200]
print(cheap)


#practice 5
with open("names.txt")as file:
    for line in file:
        print(line.strip())


#practice6
try:
    number=int(input("enter a number: "))
    result=1000/number
except ValueError:
    print("the value u enter should be integer")
except ZeroDivisionError:
    print("the value cant be divide by 0")
else:
    print(result)
finally:
    print("program finished")