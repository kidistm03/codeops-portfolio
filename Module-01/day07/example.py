
#numbers=[1,2,3,4,5]
#fruits=["apple","banana","chery"]

#numbers[i]==target


#when we compare string we are comparing there ascii values
#binary searech there call should be sorted

# def binary_search(items, target):
#     lo, hi = 0, len(items) - 1
#     while lo <= hi:
#         mid = (lo + hi) // 2
#         if items[mid] == target:
#             return mid
#         elif items[mid] < target:
#             lo = mid + 1 # go right
#         else:
#             hi = mid - 1 # go left
#     return -1




# lisut=[1,2,3,4,5,6,7,8,9,10]
# target=7
# def linear_search(lisut,target):
#     for i,x in enumerate(lisut):
#         if x==target:
#             return x
#     return -1

# print(linear_search(lisut,target))

# cities=["aa","hawasa","adama","harari"]
# cities.append("asmera")
# cities.remove("asmera")
# cities.pop()
# cities.reverse()
# print(cities)




# totals = []
# for price in [100, 250, 400]:
    
#     totals.append(price * 1.15)
# print(totals)

prices = {
    "Bread":50,
    "Milk":80,
    "Eggs":120
}

for item, price in prices.items():
    print(item, price)

prices = {"Bread": 50, "Milk": 80, "Eggs": 120} # ETB
for item, price in prices.items():
    print(f"{item}: {price} ETB")
print(prices.keys()) # the item names
print(prices.values()) # the prices
print("Milk" in prices) # True — membership test on keys