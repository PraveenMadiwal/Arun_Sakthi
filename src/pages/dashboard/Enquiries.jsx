import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../services/api";
import { setEnquiries } from "../../redux/slices/enquirySlice";

function Enquiries() {
  const dispatch = useDispatch();
  const enquiries = useSelector((state) => state.enquiries.enquiries);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await API.get("/enquiry");
      dispatch(setEnquiries(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      await API.delete(`/enquiry/${id}`);
      alert("Deleted Successfully");
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-6">
        📩 All Enquiries
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {enquiries.length === 0 ? (
          <p className="text-gray-500">No enquiries found</p>
        ) : (
          enquiries.map((e) => (
            <div
              key={e.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >

              {/* PRODUCT */}
              <div className="flex gap-3 items-center border-b pb-3">

                <img
                  src={e.imageUrl}
                  className="w-14 h-14 object-cover rounded"
                />

                <div>
                  <h3 className="font-bold text-purple-700">
                    {e.productName}
                  </h3>

                  <p className="text-xs text-gray-500">
                    ₹ {e.price}
                  </p>
                </div>

              </div>

              {/* USER */}
              <div className="mt-3 text-sm space-y-1">
                <p><b>Name:</b> {e.name}</p>
                <p><b>Email:</b> {e.email}</p>
                <p><b>Phone:</b> {e.phone}</p>
              </div>

              {/* MESSAGE */}
              <div className="mt-3 bg-gray-100 p-2 rounded text-sm">
                {e.message}
              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => handleDelete(e.id)}
                className="mt-3 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Enquiries;