import React from 'react';

function People({people}) {
  console.log('>>>>>>>>> people', people);
  
  
  return (
    <div>
      <h1>People</h1>
      {
        people.map((person, idx) => <div key={idx}>{person.name}</div>)
      }
    </div>
  );
}

export { People };
