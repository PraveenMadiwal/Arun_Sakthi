import API from "../../services/api";
import { setProducts } from "../slices/productSlice";

export const loadProducts = () => async (dispatch) => {
  try {
    const res = await API.get("/products");
    dispatch(setProducts(res.data));
  } catch (err) {
    console.log("Error loading products", err);
  }
};