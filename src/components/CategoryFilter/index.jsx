import React from "react";

function CategoryFilter({ categories }) {
  return (
    <aside>
      <div>
        {categories &&
          categories.map((category) => (
            <button style={{ background: `${category.color}` }}>
              {category.name}
            </button>
          ))}
      </div>
    </aside>
  );
}

export default CategoryFilter;
