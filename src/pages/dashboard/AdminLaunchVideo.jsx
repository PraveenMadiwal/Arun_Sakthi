import { useState, useEffect } from "react";
import API from "../../services/api";

function AdminLaunchVideo() {
  const [form, setForm] = useState({
    productName: "",
    videoUrl: "",
    textColor: "#ffffff",
  });

  const [existing, setExisting] = useState(null);

  // GET CURRENT LAUNCH VIDEO
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/launch-product");
        setExisting(res.data);

        if (res.data) {
          setForm({
            productName: res.data.productName || "",
            videoUrl: res.data.videoUrl || "",
            textColor: res.data.textColor || "#ffffff",
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // SAVE / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/launch-product", form);

      alert("Launch Video Updated Successfully!");

      const res = await API.get("/launch-product");
      setExisting(res.data);
    } catch (err) {
      console.log(err);
      alert("Error updating launch video");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow mt-6">

      <h2 className="text-2xl font-bold mb-4 text-green-700">
        Admin Launch Video Panel
      </h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={form.productName}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          type="text"
          name="videoUrl"
          placeholder="Video URL (mp4 link)"
          value={form.videoUrl}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />

        <input
          type="color"
          name="textColor"
          value={form.textColor}
          onChange={handleChange}
          className="w-20 h-10"
        />

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Save / Update Launch Video
        </button>

      </form>

      {/* PREVIEW */}
      {existing && (
        <div className="mt-6 p-4 border rounded">

          <h3 className="text-lg font-semibold mb-2">
            Current Launch Video
          </h3>

          <video
            src={existing.videoUrl}
            controls
            className="w-full rounded"
          />

          <p
            className="mt-3 text-xl font-bold"
            style={{ color: existing.textColor }}
          >
            {existing.productName}
          </p>

        </div>
      )}

    </div>
  );
}

export default AdminLaunchVideo;