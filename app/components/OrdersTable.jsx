const statusColors = {
  Pending: "bg-[#F6E2B3] text-[#8C6A29]",
  Preparing: "bg-[#E0C097] text-[#5A3E1B]",
  Delivered: "bg-[#C6D6B8] text-[#3F5D3F]",
  Cancelled: "bg-[#D9A79C] text-[#6D2E2E]",
};

export default function OrdersTable({ orders }) {
  return (
    <div className="overflow-x-auto rounded-xl shadow-md bg-white border border-[#E2CBB7]">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gradient-to-r from-[#A98467] to-[#C19A6B] text-white">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Order ID
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Customer
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Pizza</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">Qty</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 text-gray-800 bg-white">
          {orders.map((order) => (
            <tr
              key={order.id}
              className="hover:bg-[#FFF8F0] cursor-pointer hover:scale-101 transition-all duration-150"
            >
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.customer}</td>
              <td className="px-6 py-4">{order.type}</td>
              <td className="px-6 py-4 text-center">{order.qty}</td>
              <td className="px-6 py-4">{order.date}</td>
              <td className="px-6 py-4 text-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    statusColors[order.status] ?? "bg-gray-200 text-gray-700"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center py-6 text-gray-500 italic">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
