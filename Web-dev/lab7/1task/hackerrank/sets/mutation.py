n = int(input())
a = set(map(int, input().split()))

q = int(input())
for i in range(q):
    op = input().split()[0]
    b = set(map(int, input().split()))
    getattr(a, op)(b)

print(sum(a))