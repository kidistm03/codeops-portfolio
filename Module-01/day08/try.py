# bubble sort
number=[3,5,1,6,2,4,10,7]
n=len(number)
for i in range (n):
    for j in range(n-1):
        if number[j] > number[j + 1]:
            number[j], number[j + 1] = number[j + 1], number[j]
print(number)

# selected sort
number=[3,5,1,6,2,4,10,7]
n=len(number)
for i in range(n):
    min_idx = i
    for j in range(i + 1, n):
        if number[j] < number[min_idx]:
            min_idx = j
    number[i],number[min_idx]=number[min_idx],number[i]
print (number)
    



# insertion sort
# number=[3,5,1,6,2,4,10,7]
# n=len(number)
# for i in range(1,n):