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

export default async function OrdersPageA() {
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

  const { label, key, dir } = sortConfig;
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
        ? valA < valB
          ? -1
          : valA > valB
          ? 1
          : 0
        : valA > valB
        ? -1
        : valA < valB
        ? 1
        : 0;
    }

    return dir === "asc" ? valA - valB : valB - valA;
  });

  return (
    <div className="p-4 md:p-8 bg-[#4E342E] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-[#F3E5AB] flex items-center gap-2">
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
      />

      <OrdersTable orders={filteredOrders} />
    </div>
  );
}
