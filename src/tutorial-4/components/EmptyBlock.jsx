import React from 'react';
import ghost from '../assets/ghost.png';

function EmptyBlock() {
  return (
    <div>
      <div className="block empty-block">
        <img src={ghost} width="50px" height="50px" alt="Ghost" />
        <h2>Список фраз пустой</h2>
        <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
      </div>
    </div>
  );
}

export default EmptyBlock;
