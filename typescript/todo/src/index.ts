const btn = document.getElementById('btn')! as HTMLButtonElement;
// Type 'HTMLElement' is missing the following properties from type 'HTMLInputElement': accept, align, alt, autocomplete, and 53 more.
const todoInput = document.getElementById('todo-input')! as HTMLInputElement;
const form = document.querySelector('#todo-form') as HTMLFormElement;
const list = document.getElementById('todo-list')!;

interface Todo {
  text: string;
  completed: boolean;
}

const todos: Array<Todo> = readTodos();

todos.forEach(todo => createTodo(todo));

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodoTitle = todoInput.value;

  if (newTodoTitle === '') return;

  const newTodo: Todo = {
    text: newTodoTitle,
    completed: false,
  };

  todos.push(newTodo);
  createTodo(newTodo);

  saveTodos();
  todoInput.value = '';
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function readTodos(): Array<Todo> {
  const storageData = localStorage.getItem('todos') || '[]';
  const todosJson = JSON.parse(storageData);

  return todosJson;
}

function updateTodoUi(todo: Todo, newLi: HTMLLIElement) {
  if (todo.completed === true) newLi.style.textDecoration = 'line-through';
  else newLi.style.textDecoration = 'none';
}

function createTodo(todo: Todo) {
  const newLi = document.createElement('li');
  newLi.append(todo.text);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.completed;
  newLi.append(checkbox);

  if (todo.completed === true) newLi.style.textDecoration = 'line-through';
  else newLi.style.textDecoration = 'none';

  updateTodoUi(todo, newLi);
  list.append(newLi);

  checkbox.addEventListener('change', function () {
    todo.completed = checkbox.checked;
    updateTodoUi(todo, newLi);
    saveTodos();
  });
}

form.addEventListener('submit', handleSubmit);
