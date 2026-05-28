import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../services/api";
import { setEnquiries } from "../../redux/slices/enquirySlice";

function Enquiries() {
  const dispatch = useDispatch();
  const enquiries = useSelector((state) => state.enquiries.enquiries);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await API.get("/enquiry");
        dispatch(setEnquiries(res.data));
      } catch (err) {
        console.log(err);
      }
    };

    fetchEnquiries();
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Enquiries</h2>

      <div className="space-y-3">
        {enquiries.length === 0 ? (
          <p className="text-gray-500">No enquiries found</p>
        ) : (
          enquiries.map((e) => (
            <div key={e.id} className="border p-3 rounded">
              <p><b>Product:</b> {e.product?.productName || "N/A"}</p>
              <p>{e.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Enquiries;