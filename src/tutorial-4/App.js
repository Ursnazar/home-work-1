import React from 'react';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

import { adjectivesArr1 } from './array/adjectivesArr';
import { nounsArr1 } from './array/nounseArr';

function App() {
  const adjectivesArr = adjectivesArr1;
  const nounsArr = nounsArr1;

  const [phrase, setPhrase] = React.useState([]);

  const newPhrase = [];

  function generateRandomNum(arr1, arr2) {
    let maxNumAdjectives = arr1.length;
    let maxNumnouns = arr2.length;

    generatePhrase(
      Math.floor(Math.random() * maxNumAdjectives),
      Math.floor(Math.random() * maxNumAdjectives),
      Math.floor(Math.random() * maxNumnouns),
    );
  }

  function generatePhrase(num1, num2, num3) {
    let newStr = String([adjectivesArr[num1] + ' ' + adjectivesArr[num2] + ' ' + nounsArr[num3]]);
    newPhrase.push(newStr);
    addNewPhrase();
  }

  function addNewPhrase() {
    setPhrase([...newPhrase, ...phrase]);
  }

  function resetState() {
    setPhrase([]);
  }

  return (
    <div>
      <div className="wrapper">
        {phrase.length === 0 ? <EmptyBlock /> : <Phrase phrase={phrase} />}
        <button
          className="btn btn__generate"
          onClick={() => generateRandomNum(adjectivesArr, nounsArr)}>
          Сгенерировать
        </button>
        <button className="btn btn__clear" onClick={resetState}>
          Очистить
        </button>
      </div>
    </div>
  );
}

export default App;
