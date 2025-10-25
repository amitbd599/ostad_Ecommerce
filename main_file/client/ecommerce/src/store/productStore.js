import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";

const productStore = create((set) => ({
  // all Products
  totalProducts: null,
  allProducts: null,
  allProductsRequest: async (
    category_id,
    brand_id,
    remark,
    keyword,
    per_page,
    page_no
  ) => {
    set({ allProducts: null });
    let res = await axios.get(
      baseURL +
        `/all-products/${category_id}/${brand_id}/${remark}/${keyword}/${per_page}/${page_no}`,
      {
        withCredentials: true,
        credentials: "include",
      }
    );

    if (res?.data?.success === true) {
      set({ allProducts: res?.data?.data?.products });
      set({ totalProducts: res?.data?.data?.totalCount?.[0]?.count });
    }
  },

  // all New Arrival Products
  allNewArrivalProducts: null,
  newArrivalProductsRequest: async () => {
    let res = await axios.get(baseURL + `/all-products/0/0/0/0/8/1`, {
      withCredentials: true,
      credentials: "include",
    });

    if (res?.data?.success === true) {
      set({ allNewArrivalProducts: res?.data?.data?.products });
    }
  },

  // single-product
  singleProduct: null,
  singleProductsRequest: async (id) => {
    let res = await axios.get(baseURL + `/single-product/${id}`, {
      withCredentials: true,
      credentials: "include",
    });

    if (res?.data?.success === true) {
      set({ singleProduct: res?.data?.data });
    }
  },
}));

export default productStore;
