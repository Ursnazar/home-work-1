import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';

import Comments from './components/Сomments';
import Form from './components/Form';
import styles from './style.module.scss';

function App() {
  const [state, setstate] = React.useState(JSON.parse(localStorage.getItem('comments')));

  const dataComments = [];

  function addCommentHandler(event) {
    event.preventDefault();

    if (
      !event.target.name.value.trim() ||
      !event.target.email.value.trim() ||
      !event.target.comment.value.trim()
    ) {
      alert('Please fill in all fields');
      return;
    }

    let dtFormat = new Intl.DateTimeFormat('ru-RU', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    const newUser = {
      id: nanoid(),
      fullName: event.target.name.value,
      email: event.target.email.value,
      createdAt: dtFormat.format(new Date()),
      text: event.target.comment.value,
    };

    dataComments.push(newUser);
    updateState();
    event.target.reset();
  }

  function deleteCommentHandler(id) {
    const listCommentsAfterDelete = state.filter((item) => item.id !== id);
    setstate(listCommentsAfterDelete);
  }

  function updateState() {
    setstate([...dataComments, ...state]);
  }

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(state));
  }, [state]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Comments dataComments={state} onClick={deleteCommentHandler} />
        <Form onClick={addCommentHandler} />
      </div>
    </div>
  );
}

export default App;
