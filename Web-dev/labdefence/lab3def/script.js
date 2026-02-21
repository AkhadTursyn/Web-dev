const form = document.querySelector('#taskForm');
const input = document.querySelector('#taskInput');
const list = document.querySelector('#todoList');
const filterButtons = document.querySelectorAll('.filter-btn');
const counter = document.querySelector('#counter');

let currentFilter = 'all';

function updateCounter() {
  const items = list.querySelectorAll('.todo-item');
  counter.textContent = `${items.length} items`;
}

function createTask(text) {
  const li = document.createElement('li');
  li.classList.add('todo-item');

  const leftDiv = document.createElement('div');
  leftDiv.classList.add('todo-left');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;
  span.classList.add('todo-text');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  leftDiv.appendChild(checkbox);
  leftDiv.appendChild(span);

  li.appendChild(leftDiv);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  updateCounter();
  applyFilter();
}

function applyFilter() {
  const items = list.querySelectorAll('.todo-item');

  items.forEach(item => {
    const isCompleted = item.classList.contains('is-completed');
    let show = true;

    if (currentFilter === 'active') {
      show = !isCompleted;
    }

    if (currentFilter === 'completed') {
      show = isCompleted;
    }

    item.classList.toggle('is-hidden', !show);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  createTask(value);
  input.value = '';
});

list.addEventListener('click', (e) => {
  const item = e.target.closest('.todo-item');
  if (!item) return;

  if (e.target.classList.contains('delete-btn')) {
    item.remove();
    updateCounter();
  }
});

list.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
    const item = e.target.closest('.todo-item');
    item.classList.toggle('is-completed', e.target.checked);
    applyFilter();
  }
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;

    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    applyFilter();
  });
});
