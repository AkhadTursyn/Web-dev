class Animal:
    def __init__(self, name, type, age, color):
        self.name = name
        self.type = type
        self.age = age
        self.color = color

    def info(self):
        return f"Animal {self.type}, named {self.name}, {self.age} years old, {self.color} colored"

    def birthday(self):
        self.age += 1

    def __str__(self):
        return self.info()


class Dog(Animal):
    def __init__(self, name: str = "Unnamed", age = 0, color = "Unknown", breed = "Mixed"):
        super().__init__(name, "Dog", age, color)
        self.breed = breed

    def info(self, owner_name = None):
        base = super().info()
        if owner_name is None:
            return f"{base}, breed is {self.breed}"
        return f"{base}, breed is {self.breed}, owner's name is {owner_name}"

    def bark(self, count = 1):
        for i in range(count):
            if i % 2 == 0:
                print("Woof! ", end = "")
            else:
                print("Ruff! ", end = "")
        print()

class Cat(Animal):
    def __init__(self, name: str = "Unnamed", age = 0, color = "Unknown", breed = "Mixed"):
        super().__init__(name, "Cat", age, color)
        self.breed = breed

    def info(self):
        return super().info() + f", breed is {self.breed}"

    def meow(self, count = 1):
        for i in range(count):
            print("Meow! ", end = "")
        print()