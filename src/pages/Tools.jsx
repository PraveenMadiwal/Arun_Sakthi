import { useDispatch, useSelector } from "react-redux";
import { addEnquiry } from "../redux/slices/enquirySlice";
import ProductCard from "../components/ui/ProductCard";
import { useState } from "react";

function Tools() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [search, setSearch] = useState("");

  const handleEnquire = (product) => {
    dispatch(
      addEnquiry({
        id: Date.now(),
        product,
        message: "User interested",
      })
    );

    alert("Enquiry sent!");
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-4 dark:text-white">
        Tools Marketplace
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search tools..."
        className="w-full p-3 mb-6 border rounded-lg dark:bg-gray-800 dark:text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEnquire={handleEnquire}
          />
        ))}

      </div>
    </div>
  );
}

export default Tools;