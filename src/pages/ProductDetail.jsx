import { useState } from "react";

function ProductDetail({ product, onBack, onEnquire }) {

  // convert string → array (backend stores comma-separated)
  const images = product.imageUrl?.includes(",")
    ? product.imageUrl.split(",")
    : [product.imageUrl];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-8">

      <div className="max-w-6xl mx-auto px-4">

        {/* BACK */}
        <button
          onClick={onBack}
          className="mb-4 text-green-700 font-semibold"
        >
          ← Back to Products
        </button>

        <div className="flex flex-col md:flex-row gap-6">

          {/* IMAGE SLIDER */}
          <div className="md:w-1/2">

            <div className="relative w-full h-[400px] bg-white dark:bg-gray-800 rounded-lg shadow flex items-center justify-center overflow-hidden">

              <img
                src={images[index]}
                alt={product.productName}
                className="w-full h-full object-contain"
              />

              {/* LEFT */}
              {images.length > 1 && (
                <button
                  onClick={prev}
                  className="absolute left-2 bg-black/50 text-white px-3 py-1 rounded"
                >
                  ‹
                </button>
              )}

              {/* RIGHT */}
              {images.length > 1 && (
                <button
                  onClick={next}
                  className="absolute right-2 bg-black/50 text-white px-3 py-1 rounded"
                >
                  ›
                </button>
              )}

            </div>

            {/* DOTS */}
            {images.length > 1 && (
              <div className="flex justify-center gap-2 mt-3">
                {images.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      i === index ? "bg-green-700" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}

          </div>

          {/* DETAILS */}
          <div className="md:w-1/2 space-y-4">

            <h2 className="text-2xl font-bold dark:text-white">
              {product.productName}
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>

            <p className="font-bold text-green-700 text-lg">
              ₹ {product.price}
            </p>

            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>

            {/* ENQUIRY ONLY */}
            <button
              onClick={() => onEnquire(product)}
              className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Send Enquiry
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;