import React, { useState } from "react";

function FactList({ facs, categories }) {
  return (
    <div>
      <ul className="facts-list">
        {facs &&
          facs.map((fac) => (
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
                <button>{fac.votesInteresting} 😇</button>
                <button>{fac.votesMindblowing} 🥰</button>
                <button>{fac.votesFalse} 😅</button>
              </div>
            </li>
          ))}
      </ul>
      <p>The are {facs.length} in database add your own!</p>
    </div>
  );
}

export default FactList;
