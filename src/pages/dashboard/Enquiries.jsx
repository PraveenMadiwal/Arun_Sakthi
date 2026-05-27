import { useSelector } from "react-redux";

function Enquiries() {
  const enquiries = useSelector((state) => state.enquiries.enquiries);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4 text-purple-600">
        User Enquiries
      </h2>

      <div className="space-y-3">

        {enquiries.map((e) => (
          <div
            key={e.id}
            className="p-3 border rounded dark:border-gray-700"
          >
            <p className="font-semibold">
              {e.product.name}
            </p>
            <p className="text-sm text-gray-500">
              {e.message}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Enquiries;