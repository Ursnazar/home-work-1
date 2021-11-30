import React from 'react';

function Phrase({ phrase }) {
  return (
    <div className="list">
      {phrase.map((item, index) => (
        <div key={`${(item, index)}`} className="block">
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
}

export default Phrase;
