import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../services/api";
import {
  setProducts,
  deleteProduct,
} from "../../redux/slices/productSlice";

import EditProductModal from "../../components/EditProductModal";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await API.get("/products");
      dispatch(setProducts(res.data));
    };

    fetchData();
  }, [dispatch]);

  const handleDelete = async (id) => {
    await API.delete(`/products/${id}`);
    dispatch(deleteProduct(id));
  };

  const handleUpdated = (updatedProduct) => {
    const updatedList = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );

    dispatch(setProducts(updatedList));
  };

  return (
    <div className="p-4">

      <h2 className="text-xl font-bold mb-4">Products List</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="text-center">

              <td className="border p-2">{p.id}</td>
              <td className="border p-2">{p.productName}</td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2">{p.price}</td>

              <td className="border p-2 space-x-2">

                <button
                  onClick={() => setEditProduct(p)}
                  className="bg-blue-500 text-white px-2 py-1"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 text-white px-2 py-1"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT MODAL */}
      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onUpdated={handleUpdated}
        />
      )}

    </div>
  );
}

export default Products;