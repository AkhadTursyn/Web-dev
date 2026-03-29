def power(a, n):
    pw = 1.0
    for i in range(int(n)):
        pw *= a
    return pw

a, n = map(float, input().split())
print(power(a, n))