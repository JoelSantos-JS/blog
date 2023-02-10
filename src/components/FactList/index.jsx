import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-toastify";
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

  const handleDelete = (id) => {
    if (facs.length === 1) {
      toast.error("Você não pode excluir todos os posts!", {
        position: "top-right",
        autoClose: 1380,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    try {
      const deletePost = facs.filter((fact) => fact.id !== id);

      setFacs(deletePost);

      localStorage.setItem("data", JSON.stringify(deletePost));

      toast.success("Post delete with successfully!", {
        position: "top-right",
        autoClose: 980,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Error to delete the post", {
        position: "top-right",
        autoClose: 1380,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
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
