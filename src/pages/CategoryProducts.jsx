import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../components/ui/ProductCard";

function CategoryProducts() {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.products);

  const filtered = (products || []).filter(
    (p) => p.category === category
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#81864A]">
          {category}
        </h1>

        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-600 hover:text-green-700"
        >
          ← Back
        </button>
      </div>

      {/* PRODUCTS GRID */}
      {filtered.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>
      )}

      {/* FOOTER */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        © 2026 Your Company • All Rights Reserved
      </div>

    </div>
  );
}

export default CategoryProducts;