import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";
import { getAllProducts } from "../services/productService";
import ProductCard from "../components/ui/ProductCard";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      dispatch(setProducts(data));
    };

    fetchProducts();
  }, [dispatch]);

  // GROUP BY CATEGORY
  const grouped = (products || []).reduce((acc, item) => {
    const key = item.category || "Others";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-[#81864A] mb-8 text-center">
        Products Categories
      </h1>

      {Object.keys(grouped).map((category) => {

        const items = grouped[category].slice(0, 4);
        const hasMore = grouped[category].length > 4;

        return (
          <div key={category} className="mb-8 pb-4">

            {/* CATEGORY HEADER */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold text-[#81864A]">{category}</h2>
            </div>

            {/* SINGLE LINE ROW */}
            <div
                  className="
                   flex gap-2
                   overflow-x-auto
                   scroll-smooth
                   pb-2
                   -mx-2 px-2 scrollbar-hide
                   touch-pan-x
                 ">

              {/* PRODUCTS */}
              {items.map((product) => (
                <div key={product.id} className="w-60 flex-shrink-0">
                  <ProductCard product={product} />
                </div>
              ))}

              
              {hasMore && (
                <div
                  onClick={() =>
                    navigate(`/products/category/${category}`)
                  }
                  className="
                    w-60 flex-shrink-0
                    bg-white dark:bg-gray-800
                    rounded-xl shadow-md
                    flex flex-col items-center justify-center
                    cursor-pointer
                    hover:shadow-xl transition
                    border-2 border-dashed border-gray-300
                  "
                >
                  <span className="text-2xl font-bold text-green-700">
                    +{grouped[category].length - 3}
                  </span>

                  <p className="text-sm text-gray-600 mt-2">
                    More {category}
                  </p>

                  <button className="mt-3 text-sm text-white bg-green-700 px-4 py-1 rounded-lg">
                    View All
                  </button>
                </div>
              )}

            </div>

          </div>
        );
      })}
    </div>
  );
}

export default Products;