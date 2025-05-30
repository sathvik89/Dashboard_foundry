"use client";
import { useState } from "react";
import orders from "./PizzaOrders";
import OrderFilters from "../components/OrderFilters";
import OrdersTable from "../components/OrdersTable";

const sortOptions = [
  { label: "Newest Date", key: "date", dir: "desc" },
  { label: "Oldest Date", key: "date", dir: "asc" },
  { label: "Qty High → Low", key: "qty", dir: "desc" },
  { label: "Qty Low → High", key: "qty", dir: "asc" },
  { label: "Customer A → Z", key: "customer", dir: "asc" },
  { label: "Customer Z → A", key: "customer", dir: "desc" },
];

export default function OrdersClient() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState(sortOptions[0]);

  // getting unique pizza types
  const pizzaTypes = ["All", ...new Set(orders.map((o) => o.type))];

  // filter and sort the imported orders
  let filteredOrders = [...orders];

  if (statusFilter !== "All") {
    filteredOrders = filteredOrders.filter((o) => o.status === statusFilter);
  }

  if (typeFilter !== "All") {
    filteredOrders = filteredOrders.filter((o) => o.type === typeFilter);
  }

  const { key, dir } = sortConfig;
  filteredOrders.sort((a, b) => {
    let valA = a[key];
    let valB = b[key];

    if (key === "date") {
      valA = new Date(valA);
      valB = new Date(valB);
      return dir === "asc" ? valA - valB : valB - valA;
    }

    if (typeof valA === "string" && typeof valB === "string") {
      return dir === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }

    return dir === "asc" ? valA - valB : valB - valA;
  });

  return (
    <div className="min-h-screen bg-[#4E342E] p-4 sm:p-6 md:p-8 lg:p-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#F3E5AB] flex flex-wrap items-center gap-2">
        🍕 Pizza Orders
      </h2>

      <OrderFilters
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        sortConfig={sortConfig}
        setSortConfig={setSortConfig}
        pizzaTypes={pizzaTypes}
        sortOptions={sortOptions}
        className="mb-6"
      />

      <div className="overflow-x-auto rounded-xl shadow-md bg-white border border-[#E2CBB7]">
        <OrdersTable orders={filteredOrders} />
      </div>
    </div>
  );
}
