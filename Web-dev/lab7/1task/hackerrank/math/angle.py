import math

ab = int(input())
bc = int(input())
mbc = math.degrees(math.atan(ab / bc))
print(f"{round(mbc)}°")