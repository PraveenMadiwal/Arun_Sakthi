import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEnquiry } from "../redux/slices/enquirySlice";
import ProductCard from "../components/ui/ProductCard";
import ProductDetail from "./ProductDetail";
import { getAllProducts } from "../services/productService";
import { setProducts } from "../redux/slices/productSlice";

function Tools() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();

        console.log("TOOLS PRODUCTS:", data);

        dispatch(setProducts(data));
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchProducts();
  }, [dispatch]);

  // ENQUIRY
  const handleEnquire = (product) => {
    dispatch(
      addEnquiry({
        id: Date.now(),
        product,
        message: "User interested in this product",
      })
    );

    alert("Enquiry sent!");
  };

  // 🔥 SHOW ONLY TOOL CATEGORY PRODUCTS
  const toolProducts = (products || []).filter(
    (item) =>
      item.category &&
      item.category.toLowerCase().includes("tool")
  );

  // GROUP TOOL PRODUCTS
  const grouped = toolProducts.reduce((acc, item) => {
    const key = item.category || "Tools";

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(item);

    return acc;
  }, {});

  // PRODUCT DETAIL PAGE
  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
        onEnquire={handleEnquire}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* PAGE TITLE */}
      <div className="flex items-center justify-center flex-col mb-10">
        <h1 className="text-4xl font-bold text-[#81864A] dark:text-white">
          Tools & Machinery
        </h1>

        <p className="text-gray-500 mt-2">
          Professional industrial tools and machinery collection
        </p>
      </div>

      {/* NO DATA */}
      {Object.keys(grouped).length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
            No Tools Available
          </h2>

          <p className="text-gray-500 mt-2">
            Admin has not added tools products yet.
          </p>
        </div>
      ) : (
        Object.keys(grouped).map((category) => (
          <div key={category} className="mb-12">

            {/* CATEGORY TITLE */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
                {category}
              </h2>

              <span className="text-sm text-gray-500">
                {grouped[category].length} Products
              </span>
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {grouped[category].map((product) => (
                <div key={product.id}>
                  <ProductCard
                    product={product}
                    onEnquire={handleEnquire}
                    onView={() => setSelectedProduct(product)}
                  />
                </div>
              ))}

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Tools;