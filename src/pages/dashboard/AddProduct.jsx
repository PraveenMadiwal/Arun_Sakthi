import { useState } from "react";
import API from "../../services/api";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";

function AddProduct() {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    productName: "",
    category: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/products", form);

      dispatch(addProduct(res.data)); // ✅ update redux instantly

      alert("Product Added Successfully");

      setForm({
        productName: "",
        category: "",
        description: "",
        price: "",
        imageUrl: "",
      });
    } catch (err) {
      console.log(err);
      alert("Error adding product");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          name="productName"
          placeholder="Product Name"
          value={form.productName}
          onChange={handleChange}
          className="w-full p-2 border"
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border"
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full p-2 border"
        />

        <input
          name="imageUrl"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-full p-2 border"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Add Product
        </button>

      </form>
    </div>
  );
}

export default AddProduct;