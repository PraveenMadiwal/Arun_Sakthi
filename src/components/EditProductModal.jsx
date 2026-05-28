import { useState, useEffect } from "react";
import API from "../services/api";

function EditProductModal({ product, onClose, onUpdated }) {
  const [form, setForm] = useState(product);

  useEffect(() => {
    setForm(product);
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await API.put(`/products/${product.id}`, form);

      onUpdated(res.data);
      onClose();

      alert("Product Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-[400px]">

        <h2 className="text-xl font-bold mb-3">Edit Product</h2>

        <form onSubmit={handleUpdate} className="space-y-2">

          <input
            name="productName"
            value={form.productName}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full border p-2"
          />

          <div className="flex justify-between mt-3">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-3 py-1"
            >
              Cancel
            </button>

            <button className="bg-green-600 text-white px-3 py-1">
              Update
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default EditProductModal;