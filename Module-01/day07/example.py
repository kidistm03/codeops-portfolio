
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



numbers=[1,2,3,4,5,6,7,8,9,10]
target=7

def binary_search(numbers,target):
    left=0
    right=len(numbers)-1
    while left<=right:
        mid=(left+right)//2
        if numbers[mid]==target:
            return mid
        elif numbers[mid]<target:
            left=mid+1
        else:
            right=mid-1
    return -1

print(binary_search(numbers,target))