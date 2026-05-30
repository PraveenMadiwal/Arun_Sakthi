import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import EnquiryModal from "./EnquiryModal";

function ProductCard({ product, onView }) {

  const images = product.imageUrl?.includes(",")
    ? product.imageUrl.split(",")
    : [product.imageUrl];

  const [index, setIndex] = useState(0);
  const [openEnquiry, setOpenEnquiry] = useState(false);

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

      {/* IMAGE */}
      <div
        className="relative h-48 flex items-center justify-center cursor-pointer"
        onClick={() => onView?.(product)}
      >
        <img
          src={images[index]}
          className="h-full w-full object-contain"
        />

        {images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 bg-black/40 text-white px-2">‹</button>
            <button onClick={nextImage} className="absolute right-2 bg-black/40 text-white px-2">›</button>
          </>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        <h2 className="font-semibold">{product.productName}</h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center text-purple-700 font-bold">
          <FaRupeeSign />
          {product.price}
        </div>

        <button
          onClick={() => setOpenEnquiry(true)}
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          Enquire
        </button>

      </div>

      {/* POPUP */}
      {openEnquiry && (
        <EnquiryModal
          product={product}
          onClose={() => setOpenEnquiry(false)}
        />
      )}

    </div>
  );
}

export default ProductCard;