import React, { useEffect, useState } from "react";

function NewFactForm({ categories, facs, setFacs, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const textLeght = 200 - text.length;

  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (text && isValidHttpUrl(source) && category && textLeght <= 200) {
      const newFact = {
        id: Math.round(Math.random() * 10000),
        text,
        source,
        category,

        createdIn: new Date().getFullYear(),
      };

      await localStorage.setItem("data", JSON.stringify([...facs, newFact]));

      setFacs((fac) => [...fac, newFact]);
      setText("");
      setSource("");
      setCategory("");
      setShowForm(false);
    }
  }

  return (
    <>
      <form className="fact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Share a fact about the world.."
          onChange={(e) => setText(e.target.value)}
        />
        <span>{textLeght}</span>
        <input
          type="text"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Link here..."
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose category</option>
          {categories &&
            categories.map((category) => (
              <option value={category.name} key={category.name}>
                {category.name.toUpperCase()}
              </option>
            ))}
        </select>
        <button className="btn btn-large">Post</button>
      </form>
    </>
  );
}

export default NewFactForm;
