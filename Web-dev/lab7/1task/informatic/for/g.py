x = int(input())
cnt = 0
for i in range(1, x + 1):
    if i * i > x:
        break
    if x % i == 0:
        cnt += 1
        if i * i < x:
            cnt += 1
print(cnt)