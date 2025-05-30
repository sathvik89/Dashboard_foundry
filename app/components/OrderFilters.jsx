"use client";

export default function OrderFilters({
  statusFilter,
  setStatusFilter,
  typeFilter,
  setTypeFilter,
  sortConfig,
  setSortConfig,
  pizzaTypes,
  sortOptions,
}) {
  const universalClass = `
    px-5 py-2.5 rounded-md 
    border border-[#B08562]
    bg-[#F9F1E7] text-[#5C3B1E] 
    shadow-[0_3px_8px_rgba(100,64,38,0.1)]
    focus:outline-none focus:ring-2 focus:ring-[#B08562]
    transition duration-200
    font-semibold
  `;

  return (
    <div className="mb-6 flex flex-wrap gap-4 items-center">
      {/* Status filtering */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className={universalClass}
      >
        <option value="All">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Preparing">Preparing</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      {/* Type filtering */}
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className={universalClass}
      >
        {pizzaTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* Sort filtering */}
      <select
        value={sortConfig.label}
        onChange={(e) =>
          setSortConfig(sortOptions.find((opt) => opt.label === e.target.value))
        }
        className={universalClass}
      >
        {sortOptions.map((opt) => (
          <option key={opt.label} value={opt.label}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
