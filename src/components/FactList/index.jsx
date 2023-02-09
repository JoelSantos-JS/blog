import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
function FactList({ facs, categories, setFacs }) {
  const [votes, setVotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    // Carregar dados iniciais aqui
    setVotes(facs);
  }, []);

  const filteredFacts = facs.filter(
    (fact) => !selectedCategory || fact.category === selectedCategory
  );

  console.log(facs);

  const handleDelete = (id) => {
    if (facs.length === 1) {
      alert("Você não pode excluir todos os posts!");
      return;
    }
    const deletePost = facs.filter((fact) => fact.id !== id);

    setFacs(deletePost);

    localStorage.setItem("data", JSON.stringify(deletePost));
  };
  return (
    <div>
      <ul className="facts-list">
        {filteredFacts &&
          filteredFacts.map((fac) => (
            <li key={fac.id} className="fact">
              <span className="delete">
                <BsTrash size={23} onClick={() => handleDelete(fac.id)} />
              </span>

              <a href={fac.source} target="_blank" className="source">
                {fac.text}
              </a>

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
            </li>
          ))}
      </ul>
      <p>
        {filteredFacts && facs.length === 0
          ? "There is nothing here , be the first to share a fact!"
          : `'The are ${facs.length} in database add your own!'`}
      </p>
    </div>
  );
}

export default FactList;
