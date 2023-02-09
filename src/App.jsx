import { useEffect, useState } from "react";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import "./style.css";

function App() {
  const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
  ];

  const initialFacts = [
    {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",

      createdIn: 2021,
    },
  ];

  const dados = JSON.parse(localStorage.getItem("data"));

  const [facs, setFacs] = useState(dados || initialFacts);

  const [showform, setShowForm] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("All");

  const filteredFacts =
    currentCategory === "All"
      ? facs
      : facs.filter((fact) => fact.category === currentCategory);

  useEffect(() => {}, []);

  return (
    <>
      <Header showform={showform} setShowForm={setShowForm} />

      {showform ? (
        <NewFactForm
          categories={CATEGORIES}
          facs={facs}
          setFacs={setFacs}
          setShowForm={setShowForm}
        />
      ) : null}

      <main className="main">
        <CategoryFilter
          categories={CATEGORIES}
          setCurrentCategory={setCurrentCategory}
        />
        <FactList
          facs={filteredFacts}
          categories={CATEGORIES}
          setFacs={setFacs}
        />
      </main>
    </>
  );
}

export default App;
