def print_rangoli(size):
    # your code goes here
    for i in range(size * 2 - 1):
        for j in range(1, size * 4 - 2):
            if j % 2 == 0:
                print('-', end = '')
            else:
                c = chr(97 + (abs(size - 1 - i) + abs(size * 2 - 1 - j) // 2))
                if ord(c) < 97 + size:
                    print(c, end = '')
                else:
                    print('-', end = '')
        print()


if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)