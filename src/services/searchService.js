import API from "./api";

export const searchWebsite = async (keyword) => {
  const response = await API.get(
    `/search?keyword=${encodeURIComponent(keyword)}`
  );

  return response.data;
};