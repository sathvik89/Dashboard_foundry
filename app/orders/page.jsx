import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import orders from "./PizzaOrders";

const statusColors = {
  Pending: "bg-yellow-100 text-yellow-800",
  Preparing: "bg-orange-100 text-orange-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="p-6 text-center text-lg bg-[#F5E6D3] rounded-xl shadow-md">
        Please login to view orders.
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 bg-[#F5E6D3] min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        🍕 Pizza Orders
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-md bg-white border border-[#E2CBB7]">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-[#A98467] to-[#C19A6B] text-white sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Order ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Customer
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Pizza
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold">
                Qty
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Date
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-[#FFF8F0] hover:text-black text-black transition-all duration-200"
              >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.type}</td>
                <td className="px-6 py-4 text-center">{order.qty}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[order.status] || "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
