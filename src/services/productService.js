import API from "./api";

// GET ALL PRODUCTS
export const fetchProducts = () => API.get("/products");

// CREATE PRODUCT
export const createProduct = (data) => API.post("/products", data);

// DELETE PRODUCT
export const deleteProduct = (id) => API.delete(`/products/${id}`);

// UPDATE PRODUCT
export const updateProduct = (id, data) =>
  API.put(`/products/${id}`, data);

// GET ALL PRODUCTS
export const getAllProducts = async () => {
  const res = await API.get("/products");
  return res.data;
};