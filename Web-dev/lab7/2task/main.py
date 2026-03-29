from models import Dog, Cat

def main():
    animals = []
    cat = Cat("Barsik", 6, "white")
    dog = Dog("Alpha", 10, "black", "shepherd dog")
    animals.append(cat)
    animals.append(dog)

    for a in animals:
        print(a.info())

    for a in animals:
        a.birthday()
        print(a)

    dog.bark()
    dog.bark(21)
    cat.meow()
    cat.meow(67)

if __name__ == "__main__":
    main()