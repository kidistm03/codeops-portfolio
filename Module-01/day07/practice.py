#1 
# O(1)
# List indexing takes the same time no matter the list size.
numbers = [10, 20, 30, 40, 50]
print(numbers[2])

# O(n)
# A single loop visits every element once.
for i in numbers:
    print(i)

# O(n²)
# A nested loop checks every pair of elements.
for i in numbers:
    for j in numbers:
        print(i, j)

# O(1)
# Dictionary acess using its key so it takes the same time for all.
students = {
    "1001": "Kidist",
    "1002": "Abel",
    "1003": "Sara"
}
print(students["1002"])


# O(log n)
# Binary search cuts the search space in half each step.
numbers = [10, 20, 30, 40, 50, 60, 70]

left = 0
right = len(numbers) - 1
target = 50

while left <= right:
    middle = (left + right) // 2
    if numbers[middle] == target:
        print("Found")
        break
    elif numbers[middle] < target:
        left = middle + 1
    else:
        right = middle - 1

#2
import time
numbers = []
student = {}
for i in range(100000):
    numbers.append(i)
    student[i] = i

print("output of practice2")
start = time.time()
99999 in numbers
end = time.time()
print("List:", end-start)
start = time.time()
99999 in student
end = time.time()
print("Dictionary:", end-start)

#3
class Stack:
    def __init__(self):
        self.items = []
    def push(self, item):
        self.items.append(item)
    def pop(self):
        return self.items.pop()
    def peek(self):
        return self.items[-1]

print("output of practice3")
stack = Stack()
stack.push("Kidist")
stack.push("Abel")
stack.push("Sara")

print(stack.peek())

print(stack.pop())
print(stack.pop())
print(stack.pop())

#4
from collections import deque
queue = deque()
queue.append("Kidist")
queue.append("Abel")
queue.append("Sara")
queue.append("John")
queue.append("Helen")

print("output of practice4")
while queue:
    customer = queue.popleft()
    print(customer)

#5
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    def push_front(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    def print_all(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next
print("output of practice5")
my_list = LinkedList()

my_list.push_front("Kidist")
my_list.push_front("Abel")
my_list.push_front("Sara")

my_list.print_all()