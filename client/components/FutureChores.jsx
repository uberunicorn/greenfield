import React from 'react';
import FutureChoreEntry from './FutureChoreEntry.jsx';

function FutureChores(props) {
  return (
    <div className="container future-chores-list">
      <div className="row">
        <h3>Tomorrow and Beyond</h3>
      </div>
      {props.chores.map((chore, index) => {
        return (
          <FutureChoreEntry
            chore={chore}
            key={index}
            index={index}
            handleCompletion={props.handleCompletion}
          />
        );
      })}
    </div>
  );
}

export default FutureChores;
