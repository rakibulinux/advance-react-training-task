/* eslint-disable react/prop-types */
import { useState } from "react";
import Pagination from "./Pagination";
import Table from "./Table";

const OrderManagement = () => {
  const [selectedTab, setSelectedTab] = useState("All Orders");
  const [orderData, setOrderData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  // Fetch fake order data
  fetch("orderData.json")
    .then((req) => req.json())
    .then((data) => setOrderData(data))
    .catch((err) => {
      console.log(err);
    });

  const filteredOrders = orderData.filter((order) => {
    if (selectedTab === "All Orders") {
      return true;
    } else if (selectedTab === "Regular Delivery") {
      return order.deliveryType === "Regular";
    } else if (selectedTab === "Express Delivery") {
      return order.deliveryType === "Express";
    }
    return false;
  });

  // Pagination logic
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${
            selectedTab === "All Orders"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("All Orders")}
        >
          All Orders
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${
            selectedTab === "Regular Delivery"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("Regular Delivery")}
        >
          Regular Delivery
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedTab === "Express Delivery"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => handleTabClick("Express Delivery")}
        >
          Express Delivery
        </button>
      </div>

      <Table orders={currentOrders} />
      {filteredOrders.length > ordersPerPage && (
        <Pagination
          currentPage={currentPage}
          totalOrders={filteredOrders.length}
          ordersPerPage={ordersPerPage}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default OrderManagement;
