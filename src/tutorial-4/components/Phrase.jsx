import React from 'react';

function Phrase(props) {
  const arr = props.phrase;
  return (
    <div className="list">
      {arr.map((item, index) => (
        <div key={`${(item, index)}`} className="block">
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
}

export default Phrase;
