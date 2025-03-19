import React, { useState, useEffect } from "react";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];
    setOrders(storedOrders);
  }, []);

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">Order ID</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Total</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.date}</td>
                  <td className="py-2 px-4">₹{order.total}</td>
                  <td className="py-2 px-4 text-blue-600">{order.status}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => viewOrderDetails(order)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedOrder && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow-lg">
          <h3 className="text-lg font-semibold">Order Details</h3>
          <p className="text-sm text-gray-700">Order ID: {selectedOrder.id}</p>
          <p className="text-sm text-gray-700">Date: {selectedOrder.date}</p>
          <p className="text-sm text-gray-700">Total: ₹{selectedOrder.total}</p>
          <p className="text-sm text-gray-700">Status: {selectedOrder.status}</p>
          <h4 className="text-md font-semibold mt-3">Items:</h4>
          <ul className="list-disc pl-5">
            {selectedOrder.items.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
