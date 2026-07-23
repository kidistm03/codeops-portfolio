#1
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
def insert(root, value):
    if root is None:
        return Node(value)

    if value < root.value:
        root.left = insert(root.left, value)
    else:
        root.right = insert(root.right, value)
    return root

def inorder(root):
    if root is not None:
        inorder(root.left)
        print(root.value, end=" ")
        inorder(root.right)

numbers = [50, 30, 70, 20, 40, 60, 80]
root = None
for number in numbers:
    root = insert(root, number)
print("BST In-order traversal:")
inorder(root)

#2
def height(node):
    if node is None:
        return 0
    left_height = height(node.left)
    right_height = height(node.right)
    return max(left_height, right_height) + 1
print("\nTree height:")
print(height(root))

#3
graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F"],
    "D": [],
    "E": [],
    "F": []
}
def bfs(graph, start):
    visited = set()
    queue = [start]
    while queue:
        current = queue.pop(0)
        if current not in visited:
            visited.add(current)

            for neighbor in graph[current]:
                queue.append(neighbor)
    return visited  
print("BFS result:")
print(bfs(graph, "A"))

#4
def dfs(graph, start, visited=None):

    if visited is None:
        visited = []
    visited.append(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

    return visited
print("DFS result:")
print(dfs(graph, "A"))

#5
import heapq
tasks = []
heapq.heappush(tasks, (3, "Study Python"))
heapq.heappush(tasks, (1, "Finish homework"))
heapq.heappush(tasks, (5, "Watch movie"))
heapq.heappush(tasks, (2, "Practice coding"))
heapq.heappush(tasks, (4, "Read book"))

print("Priority Queue:")
while tasks:
    priority, task = heapq.heappop(tasks)

    print(priority, "-", task)    