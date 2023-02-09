import React from "react";

function CategoryFilter({ categories, setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("All")}
          >
            All
          </button>
        </li>
        {categories &&
          categories.map((category) => (
            <li className="category" key={category.name}>
              <button
                className="btn btn-category"
                style={{ background: `${category.color}` }}
                onClick={() => setCurrentCategory(category.name)}
              >
                {category.name}
              </button>
            </li>
          ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
