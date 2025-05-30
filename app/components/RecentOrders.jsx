"use client";
import orders from "../orders/PizzaOrders";

export default function RecentOrders() {
  const recent = orders.slice(0, 3); // showing only the top 3 orders

  return (
    <div className="text-left space-y-4">
      <h2 className="text-xl font-semibold text-[#4E342E] border-b border-[#A1887F] pb-1">
        Recent Pizza Orders 🍕
      </h2>
      <ul className="space-y-2">
        {recent.map((order) => (
          <li
            key={order.id}
            className="bg-[#FFF8E1] border border-[#D7CCC8] rounded-lg p-4 shadow-sm"
          >
            <p className="text-sm text-[#5D4037]">
              <span className="font-semibold">{order.customer}</span> ordered{" "}
              <span className="italic">
                {order.qty} x {order.type}
              </span>{" "}
              —<span className="ml-2">{order.status}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
