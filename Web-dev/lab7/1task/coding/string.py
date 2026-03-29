def hello_name(name):
  return "Hello " + name + "!"

def make_abba(a, b):
  return a+2*b+a

def make_tags(tag, word):
  return "<"+tag+">"+word+"</"+tag+">"

def make_out_word(out, word):
  return out[:2] + word + out[2:]

def extra_end(str):
  return str[-2:]*3

def first_two(str):
  return str if len(str)<=2 else str[:2]

def first_half(str):
  return str[:len(str)/2]

def without_end(str):
  return str[1:-1]

def combo_string(a, b):
  return a+b+a if len(a)<len(b) else b+a+b

def non_start(a, b):
  return a[1:]+b[1:]

def left2(str):
  return str[2:]+str[:2]

def double_char(str):
  new_str = ""
  for char in str:
    new_str += char*2
  return new_str

def count_hi(str):
  return str.count("hi")

def cat_dog(str):
  return str.count("cat") == str.count("dog")

def count_code(str):
  count = 0
  i=0
  while "co" in str[i:]:
    if len(str[i+str[i:].index("co"):]) >= 4 and str[i+3+str[i:].index("co")] == "e":
      count += 1
    i += str[i:].index("co")+3
  return count

def end_other(a, b):
  long_s, short_s = (a,b) if len(a) >= len(b) else (b,a)
  return long_s.lower().endswith(short_s.lower())

def xyz_there(str):
  i=0
  while "xyz" in str[i:]:
    if str[i-1+str[i:].index("xyz")] != ".":
      return True
    i += str[i:].index("xyz")+2
  return False