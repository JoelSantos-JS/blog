import React, { useEffect, useState } from "react";

function FactList({ facs, categories }) {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    // Carregar dados iniciais aqui
    setVotes(facs);
  }, []);

  function handleVote(voteType, id) {
    setVotes((prevVotes) =>
      prevVotes.map((fact) => {
        if (fact.id !== id) return fact;

        switch (voteType) {
          case "interesting":
            if (fact.votesInteresting >= 1) return fact;
            return {
              ...fact,
              votesInteresting: fact.votesInteresting + 1,
            };
          case "mindblowing":
            if (fact.votesMindblowing >= 1) return fact;
            return {
              ...fact,
              votesMindblowing: fact.votesMindblowing + 1,
            };
          case "false":
            if (fact.votesFalse >= 1) return fact;
            return {
              ...fact,
              votesFalse: fact.votesFalse + 1,
            };
          default:
            return fact;
        }
      })
    );
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
