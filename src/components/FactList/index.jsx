import React from "react";

function FactList({ initialFacts, categories }) {
  const facs = initialFacts;
  const categoriesData = categories.filter((category) => category === true);
  console.log(categoriesData);

  return (
    <div>
      <ul className="facts-list">
        {facs &&
          facs.map(
            (fac) => (
              console.log(fac),
              (
                <li key={fac.id} className="fact">
                  <p>{fac.text}</p>

                  <a href={fac.source}></a>

                  <span
                    className="tag"
                    style={{
                      background: `${
                        categories.find((cat) => cat.name === fac.category)
                          .color
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
              )
            )
          )}
      </ul>
    </div>
  );
}

export default FactList;
