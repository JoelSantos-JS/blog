import React, { useState } from "react";

function FactList({ facs, categories }) {
  const [votes, setVotes] = useState(facs);

  function handleVote(voteType, id) {
    const fact = votes.find((fact) => fact.id === id);

    if (!fact) return;

    let voteCount = 0;
    switch (voteType) {
      case "interesting":
        voteCount = fact.votesInteresting;
        break;
      case "mindblowing":
        voteCount = fact.votesMindblowing;
        break;
      case "false":
        voteCount = fact.votesFalse;
        break;
      default:
        return;
    }

    if (voteCount >= 1) return;

    const newVotes = votes.map((fact) => {
      if (fact.id === id) {
        switch (voteType) {
          case "interesting":
            return {
              ...fact,
              votesInteresting: fact.votesInteresting + 1,
            };
          case "mindblowing":
            return {
              ...fact,
              votesMindblowing: fact.votesMindblowing + 1,
            };
          case "false":
            return {
              ...fact,
              votesFalse: fact.votesFalse + 1,
            };
          default:
            return fact;
        }
      }
      return fact;
    });
    setVotes(newVotes);
  }
  return (
    <div>
      <ul className="facts-list">
        {votes &&
          votes.map((fac) => (
            <li key={fac.id} className="fact">
              <p>{fac.text}</p>

              <a href={fac.source}></a>

              <span
                className="tag"
                style={{
                  background: `${
                    categories.find((cat) => cat.name === fac.category).color
                  }`,
                }}
              >
                {fac.category}
              </span>

              <div className="vote-buttons">
                <button onClick={() => handleVote("interesting", fac.id)}>
                  {fac.votesInteresting} 😇
                </button>
                <button onClick={() => handleVote("mindblowing", fac.id)}>
                  {fac.votesMindblowing} 🥰
                </button>
                <button onClick={() => handleVote("false", fac.id)}>
                  {fac.votesFalse} 😅
                </button>
              </div>
            </li>
          ))}
      </ul>
      <p>The are {facs.length} in database add your own!</p>
    </div>
  );
}

export default FactList;
