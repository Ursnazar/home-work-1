import React from 'react';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

function App() {
  const [phrase, setPhrase] = React.useState([]);

  const newPhrase = [];

  const adjectivesArr = [
    'абсолютный',
    'адский',
    'азартный',
    'активный',
    'ангельский',
    'астрономический',
    'баснословный',
    'безбожный',
    'безбрежный',
    'безвозвратный',
    'безграничный',
    'бездонный',
    'бездушный',
    'безжалостный',
    'замечательно',
    'замечательный',
    'записной',
    'запредельный',
    'заядлый',
    'звериный',
    'зверский',
    'зеленый',
    'злой',
    'злостный',
    'значительный',
    'неоспоримый',
    'неотразимый',
    'неоценимый',
    'непередаваемый',
  ];

  const nounsArr = [
    'лгун',
    'день',
    'конь',
    'олень',
    'человек',
    'программист',
    'ребёнок',
    'конец',
    'город',
    'дурак',
  ];

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
