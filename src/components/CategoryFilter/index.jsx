import React from "react";

function CategoryFilter({ categories }) {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all-categories">All</button>
        </li>
        {categories &&
          categories.map((category) => (
            <li className="category" key={category.name}>
              <button
                className="btn btn-category"
                style={{ background: `${category.color}` }}
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
