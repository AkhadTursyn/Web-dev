n = int(input())
a = list(map(int, input().split()))
cnt = 0
for i in range(1, len(a)):
    if a[i] * a[i - 1] > 0:
        cnt += 1
if cnt > 0:
    print("YES")
else:
    print("NO")