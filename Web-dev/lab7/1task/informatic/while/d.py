n = int(input())
d = 1
while d < n:
    d += d
if d == n:
    print("YES")
else:
    print("NO")