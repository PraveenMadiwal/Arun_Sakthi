import { useSelector } from "react-redux";

function DashboardHome() {
  const products = useSelector((state) => state.products.products);
  const enquiries = useSelector((state) => state.enquiries.enquiries);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Total Products</h3>
        <p className="text-2xl font-bold">{products.length}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Total Enquiries</h3>
        <p className="text-2xl font-bold">{enquiries.length}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Active Users</h3>
        <p className="text-2xl font-bold">128</p>
      </div>

    </div>
  );
}

export default DashboardHome;