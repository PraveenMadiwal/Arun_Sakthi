import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../services/api";
import { setProducts } from "../../redux/slices/productSlice";
import { setEnquiries } from "../../redux/slices/enquirySlice";

function DashboardHome() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const enquiries = useSelector((state) => state.enquiries.enquiries);

  useEffect(() => {
    const loadData = async () => {
      try {
        const productRes = await API.get("/products");
        const enquiryRes = await API.get("/enquiry");

        dispatch(setProducts(productRes.data));
        dispatch(setEnquiries(enquiryRes.data));
      } catch (err) {
        console.log("Dashboard load error", err);
      }
    };

    loadData();
  }, [dispatch]);

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
        {/* <p className="text-2xl font-bold">128</p> */}
      </div>

    </div>
  );
}

export default DashboardHome;