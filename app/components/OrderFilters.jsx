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
    px-4 py-2 rounded-lg 
    border border-[#A47148]
    bg-[#F2E8DC] text-[#4E3620] 
    shadow-[0_2px_6px_rgba(74,42,14,0.1)]
    focus:outline-none focus:ring-2 focus:ring-[#A47148]
    transition duration-200
    font-medium
  `;

  return (
    <div className="mb-6 flex flex-wrap gap-4 items-center">
      {/* status filtering */}
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

      {/* type filtering */}
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className={universalClass}
      >
        {pizzaTypes.map((type) => (
          <option key={type}> {type}</option>
        ))}
      </select>

      {/* sort filtering date */}
      <select
        value={sortConfig.label}
        onChange={(e) =>
          setSortConfig(sortOptions.find((opt) => opt.label === e.target.value))
        }
        className={universalClass}
      >
        {sortOptions.map((opt) => (
          <option key={opt.label}> {opt.label}</option>
        ))}
      </select>
    </div>
  );
}
