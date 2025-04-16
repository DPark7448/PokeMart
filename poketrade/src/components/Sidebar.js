import { useState, useEffect } from "react";
import categories from "../data/categories";

export default function Sidebar({ onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [maxPrice, setMaxPrice] = useState(2500); // in cents ($25.00)

  useEffect(() => {
    onFilterChange({ categories: selectedCategories, maxPrice });
  }, [selectedCategories, maxPrice]);

  const toggleCategory = (cat) => {
    const updated = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(updated);
  };

  return (
    <div
      className="p-3 border-end"
      style={{ width: "180px", minWidth: "160px", maxWidth: "200px" }}
    >
      <h6 className="fw-bold mb-3">Filter by Category</h6>
      <div className="mb-4">
        {categories.map((cat) => (
          <div className="form-check" key={cat.id}>
            <input
              type="checkbox"
              className="form-check-input"
              id={cat.id}
              checked={selectedCategories.includes(cat.description.toLowerCase())}
              onChange={() => toggleCategory(cat.description.toLowerCase())}
            />
            <label className="form-check-label" htmlFor={cat.id}>
              {cat.description}
            </label>
          </div>
        ))}
      </div>

      <hr />

      <h6 className="fw-bold mb-2">Max Price</h6>
      <input
        type="range"
        className="form-range"
        min={0}
        max={5000}
        step={50}
        value={maxPrice}
        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
      />
      <p className="text-muted small mb-0">${(maxPrice / 100).toFixed(2)}</p>
    </div>
  );
}
