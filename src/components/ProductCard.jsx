import { FaRupeeSign, FaEye } from "react-icons/fa";

function ProductCard({ product, onEnquire }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

      {/* IMAGE */}
      <img
        src={product.imageUrl}
        alt={product.productName}
        className="h-44 w-full object-cover"
      />

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        <h2 className="text-lg font-semibold dark:text-white">
          {product.productName}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* PRICE */}
        <div className="flex items-center text-purple-700 font-bold">
          <FaRupeeSign />
          {product.price}
        </div>

        {/* ACTIONS */}
        <div className="flex justify-between items-center pt-2">

          <button
            onClick={() => onEnquire(product)}
            className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-purple-700"
          >
            Enquire
          </button>

          <button className="text-gray-500 hover:text-purple-600">
            <FaEye />
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;