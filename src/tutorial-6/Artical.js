import React from 'react';

function Artical({ getIdFromUrl }) {
  console.log(getIdFromUrl);

  return (
    <div>
      <h1>Статья №{getIdFromUrl}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio fuga animi
        aliquam sit id veritatis, doloribus ducimus quas, dignissimos non minima quia amet possimus?
        Impedit nemo ducimus fuga rem!
      </p>
      <a href="/">
        <button>Назад</button>
      </a>
    </div>
  );
}

export default Artical;
