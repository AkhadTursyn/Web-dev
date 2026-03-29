x, d = int(input()), int(input())
cnt = 0
while x != 0:
    if x % 10 == d:
        cnt += 1
    x //= 10
print(cnt)