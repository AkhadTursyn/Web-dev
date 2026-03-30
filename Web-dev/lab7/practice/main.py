from models import TaskManager
from storage import load_tasks, save_tasks

DATA_FILE = "data.json"


def show_menu():
    print("\n=== Task Manager ===")
    print("1. Show tasks")
    print("2. Add task")
    print("3. Complete task")
    print("4. Delete task")
    print("5. Exit")


def show_tasks(manager):
    tasks = manager.list_tasks()
    if not tasks:
        print("No tasks yet.")
    else:
        print("\nYour tasks:")
        for task in tasks:
            print(task)


def add_task(manager):
    title = input("Enter task title: ")
    task = manager.add_task(title)
    print(f"Task added: {task}")


def complete_task(manager):
    try:
        task_id = int(input("Enter task ID to complete: "))
        if manager.complete_task(task_id):
            print("Task completed!")
        else:
            print("Task not found.")
    except ValueError:
        print("Error: enter a number")


def delete_task(manager):
    try:
        task_id = int(input("Enter task ID to delete: "))
        if manager.delete_task(task_id):
            print("Task deleted!")
        else:
            print("Task not found.")
    except ValueError:
        print("Error: enter a number")


def main():
    tasks = load_tasks(DATA_FILE)
    manager = TaskManager(tasks)

    while True:
        show_menu()
        choice = input("Choose an option: ")

        if choice == "1":
            show_tasks(manager)
        elif choice == "2":
            add_task(manager)
        elif choice == "3":
            complete_task(manager)
        elif choice == "4":
            delete_task(manager)
        elif choice == "5":
            save_tasks(DATA_FILE, manager.tasks)
            print("Goodbye!")
            break
        else:
            print("Invalid option!")

        save_tasks(DATA_FILE, manager.tasks)


if __name__ == "__main__":
    main()