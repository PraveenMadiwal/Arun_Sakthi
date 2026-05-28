import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

function ProductCard({ product, onEnquire, onView }) {

  // convert backend string → array
  const images = product.imageUrl?.includes(",")
    ? product.imageUrl.split(",")
    : [product.imageUrl];

  const [index, setIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">

      {/* IMAGE SLIDER */}
      <div
        className="relative h-48 bg-gray-100 dark:bg-gray-900 flex items-center justify-center cursor-pointer"
        onClick={() => onView?.(product)}
      >

        <img
          src={images[index]}
          alt={product.productName}
          className="h-full w-full object-contain"
        />

        {/* LEFT BUTTON */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="absolute left-2 bg-black/40 text-white px-2 rounded"
          >
            ‹
          </button>
        )}

        {/* RIGHT BUTTON */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="absolute right-2 bg-black/40 text-white px-2 rounded"
          >
            ›
          </button>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        <h2 className="text-lg font-semibold dark:text-white truncate">
          {product.productName}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <p className="text-xs text-gray-400">
          Category: {product.category}
        </p>

        <div className="flex items-center text-purple-700 font-bold">
          <FaRupeeSign />
          <span className="ml-1">{product.price}</span>
        </div>

        <button
          onClick={() => onEnquire(product)}
          className="w-full bg-purple-600 text-white py-1 rounded-lg hover:bg-purple-700"
        >
          Enquire
        </button>

      </div>
    </div>
  );
}

export default ProductCard;