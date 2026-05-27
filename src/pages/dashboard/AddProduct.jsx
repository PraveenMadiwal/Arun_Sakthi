import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";

function AddProduct() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        id: Date.now(),
        ...form,
      })
    );

    alert("Product added!");

    setForm({
      name: "",
      description: "",
      price: "",
      image: "",
    });
  };

  return (
    <div className="max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4 text-purple-600">
        Add New Tool
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded"
        >
          Add Product
        </button>

      </form>
    </div>
  );
}

export default AddProduct;