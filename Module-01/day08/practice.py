#1
def total(nums):
    if len(nums) == 0:
        return 0
    return nums[0] + total(nums[1:])
numbers = [10, 20, 30, 40]
print(total(numbers))
def count_down(n):
    if n == 0:
        return  
    print(n)
    count_down(n - 1)
count_down(5)

#2
def binary_search(items, target):
    left = 0
    right = len(items) - 1

    while left <= right:
        middle = (left + right) // 2
        if items[middle] == target:
            return middle
        elif items[middle] < target:
            left = middle + 1
        else:
            right = middle - 1
    return -1
balances = [100, 200, 300, 400, 500, 600]
print("output of practice2")
print(binary_search(balances, 400))
print(binary_search(balances, 700))

#3
def merge(left, right):
    result = []
    while left and right:
        if left[0] < right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0)) 
    result.extend(left)
    result.extend(right)

    return result   

def merge_sort(items):
    if len(items) <= 1:
        return items
    middle = len(items) // 2
    left = merge_sort(items[:middle])
    right = merge_sort(items[middle:])
    return merge(left, right)
numbers = [8, 3, 5, 1, 9, 2]
print("output of practice3")
print(merge_sort(numbers))
print(sorted(numbers))

#4
accounts = [
    ("Kidist", 3000),
    ("Abel", 5000),
    ("Sara", 2000),
    ("Helen", 4000)

]
result = sorted(
    accounts,
    key=lambda account: account[1],
    reverse=True
)
print("output of practice4")
print(result)

#5
def has_pair(nums, target):
    left = 0
    right = len(nums) - 1
    while left < right:
        total = nums[left] + nums[right]
        if total == target:
            return True

        elif total < target:
            left += 1

        else:
            right -= 1
    return False
numbers = [1,2,3,4,5,6,7]
print("output of practice5")
print(has_pair(numbers, 9))
print(has_pair(numbers, 20))