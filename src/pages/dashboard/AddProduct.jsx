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
    imageUrl: [""],
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (index, value) => {

    const updatedImages = [...form.imageUrl];

    updatedImages[index] = value;

    setForm({
      ...form,
      imageUrl: updatedImages,
    });
  };

  const addMoreImage = () => {

    setForm({
      ...form,
      imageUrl: [...form.imageUrl, ""],
    });

  };

  const removeImage = (index) => {

    const updatedImages = form.imageUrl.filter(
      (_, i) => i !== index
    );

    setForm({
      ...form,
      imageUrl: updatedImages,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const payload = {
      ...form,
      price: Number(form.price),
      imageUrl: form.imageUrl.filter(
        (img) => img.trim() !== ""
      ),
    };

    try {

      const res = await API.post(
        "/products",
        payload
      );

      dispatch(addProduct(res.data));

      alert("Product Added Successfully");

      setForm({
        productName: "",
        category: "",
        description: "",
        price: "",
        imageUrl: [""],
      });

    } catch (err) {

      console.log(err);

      console.log(
        err.response?.data
      );

      alert(
        err.response?.data?.message ||
        "Error adding product"
      );
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-2xl font-bold mb-5">
        Add Product
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={form.productName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows="3"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <div>

          <h3 className="font-semibold mb-2">
            Product Images
          </h3>

          {form.imageUrl.map((img, index) => (
            <div
              key={index}
              className="flex gap-2 mb-3"
            >

              <input
                type="text"
                placeholder={`Image URL ${index + 1}`}
                value={img}
                onChange={(e) =>
                  handleImageChange(
                    index,
                    e.target.value
                  )
                }
                className="flex-1 border p-2 rounded"
              />

              {form.imageUrl.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    removeImage(index)
                  }
                  className="bg-red-500 text-white px-3 rounded"
                >
                  X
                </button>
              )}

            </div>
          ))}

          <button
            type="button"
            onClick={addMoreImage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            + Add More Images
          </button>

        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Add Product
        </button>

      </form>

      {/* Preview Section */}

      <div className="mt-8">

        <h3 className="text-xl font-bold mb-4">
          Preview Images
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {form.imageUrl.map((img, index) =>

            img && (
              <img
                key={index}
                src={img}
                alt="preview"
                className="h-32 w-full object-cover border rounded"
              />
            )

          )}

        </div>

      </div>

    </div>
  );
}

export default AddProduct;