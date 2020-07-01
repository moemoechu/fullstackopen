import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(9).fill(0));
  const [most, setMost] = useState(0);

  const nextAnecdote = () => {
    let next = Math.floor(Math.random() * props.anecdotes.length);
    console.log(next);
    setSelected(next);
  };

  const voteAnecdote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
    let max = 0;
    let newMost = -1;
    newPoints.forEach((value, index) => {
      console.log(value, index);
      if (value >= max) {
        max = value;
        newMost = index;
      }
    });
    setMost(newMost);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <div>
        <button onClick={voteAnecdote}>vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
      </div>
      <h2>Anecdote with most votes</h2>
      <div>{props.anecdotes[most]}</div>
      <div>has {points[most]} votes</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
