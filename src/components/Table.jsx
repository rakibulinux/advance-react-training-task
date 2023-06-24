/* eslint-disable react/prop-types */
const Table = ({ orders }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Order ID</th>
          <th className="px-4 py-2">Customer Name</th>
          <th className="px-4 py-2">Delivery Type</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order?.orderId}>
            <td className="border px-4 py-2">{order?.orderId}</td>
            <td className="border px-4 py-2">{order?.customerName}</td>
            <td className="border px-4 py-2">{order?.deliveryType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
