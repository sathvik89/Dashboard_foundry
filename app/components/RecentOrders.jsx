"use client";
import orders from "../orders/PizzaOrders";

export default function RecentOrders() {
  const recent = orders
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="text-left space-y-4">
      <h2 className="text-xl font-semibold text-[#4E342E] border-b border-[#A1887F] pb-2">
        Recent Pizza Orders 🍕
      </h2>
      <ul className="space-y-3">
        {recent.map((order) => (
          <li
            key={order.id}
            className="bg-[#FFF8E1] border border-[#D7CCC8] rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-[#5D4037]">
                  <span className="font-semibold text-[#4E342E]">
                    {order.customer}
                  </span>{" "}
                  ordered{" "}
                  <span className="italic font-medium">
                    {order.qty} x {order.type}
                  </span>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  {new Date(order.date).toLocaleDateString("en-GB")}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-800"
                    : order.status === "Preparing"
                    ? "bg-blue-100 text-blue-800"
                    : order.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
