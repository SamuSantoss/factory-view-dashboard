function FilterBar({ filter, setFilter }) {
  const options = ["all", "running", "idle", "error"]

  return (
    <div className="filter-bar">
      <span className="filter-label">Filtrar:</span>

      <div className="filter-buttons">
        {options.map((option) => (
          <button
            key={option}
            className={`filter-btn ${
              filter === option ? `active ${option}` : ""
            }`}
            onClick={() => setFilter(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
