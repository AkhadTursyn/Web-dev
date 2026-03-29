def xor(x, y):
    return x != y

x, y = map(int, input().split())
if xor(x, y):
    print(1)
else:
    print(0)