import json
import os
from models import Task


def load_tasks(filename: str) -> list:
    if not os.path.exists(filename):
        return []

    with open(filename, "r") as f:
        data = json.load(f)

    return [Task.from_dict(item) for item in data]


def save_tasks(filename: str, tasks: list) -> None:
    with open(filename, "w") as f:
        json.dump([task.to_dict() for task in tasks], f, indent=4)