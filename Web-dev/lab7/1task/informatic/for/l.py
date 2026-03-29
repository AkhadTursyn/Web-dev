n = input()
s = 0
n = n[::-1]
for i in range(len(n)):
    s += (ord(n[i]) - 48) * (2 ** i)
print(s)