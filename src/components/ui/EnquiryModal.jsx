import { useState } from "react";
import API from "../../services/api";

function EnquiryModal({ product, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/enquiry", {
        ...form,
        productId: product.id,
      });

      alert("✅ Enquiry sent successfully!");
      onClose();
    } catch (err) {
      console.log(err);
      alert("❌ Failed to send enquiry");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-[90%] max-w-md p-5 rounded-xl shadow-lg">

        <h2 className="text-xl font-bold mb-3">
          Enquire: {product.productName}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <div className="flex gap-2">

            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded w-full"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded w-full"
            >
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default EnquiryModal;