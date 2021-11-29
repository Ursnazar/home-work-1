const tasks = [
  {
    id: 1,
    title: 'New Task1',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    title: 'New Task2',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
];

(function taskList(arr) {
  const objectOfTask = arr.reduce((key, task) => {
    key[task.id] = task;
    return key;
  }, {});

  const ul = document.querySelector('.tasklist__column');
  const form = document.forms['addTask'];

  renderTask(objectOfTask);
  form.addEventListener('submit', addNewTask);
  ul.addEventListener('click', onDeleteHandler);

  function renderTask(arr) {
    const fragment = document.createDocumentFragment();
    Object.values(arr).forEach((item) => {
      const li = createElementOfTask(item);
      fragment.appendChild(li);
    });
    ul.appendChild(fragment);
  }

  function createElementOfTask({ id, title, body, completed }) {
    let li = document.createElement('li');
    li.classList.add('tasklist__item');

    li.setAttribute('data-set', id);

    let span = document.createElement('span');
    span.style.fontWeight = 'bold';
    span.textContent = title;

    let p = document.createElement('p');
    span.style.fontStyle = 'italic';
    p.textContent = body;

    let button = document.createElement('button');
    button.classList.add('delete');
    button.textContent = 'Delete Task';

    li.appendChild(span);
    span.appendChild(p);
    p.appendChild(button);

    return li;
  }

  function addNewTask(e) {
    e.preventDefault();
    let inputTitle = form.elements.title.value;
    let inputBody = form.elements.discription.value;

    if (!inputTitle.trim() || !inputBody.trim()) {
      alert('Заполните все поля формы');
      return;
    }

    const newTask = createObjectOfNewTask(inputTitle, inputBody);
    const teamPlateNewTask = createElementOfTask(newTask);
    ul.insertAdjacentElement('afterbegin', teamPlateNewTask);
    form.reset();
  }

  function createObjectOfNewTask(title, description) {
    const newTask = {
      id: Math.round(Math.random() * 10),
      title: title,
      body: description,
    };

    objectOfTask[newTask.id] = newTask;

    return newTask;
  }

  function onDeleteHandler({ target }) {
    if (target.classList.contains('delete')) {
      let parent = target.closest('[data-set]');
      let id = parent.dataset.set;
      delete objectOfTask[id];
      let parent1 = target.parentElement;
      let paren2 = parent1.parentElement;
      let parent3 = paren2.parentElement;
      parent3.remove();
      console.log(objectOfTask);
    }
  }
})(tasks);
