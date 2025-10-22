import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";

const productStore = create((set) => ({
  // all-product
  allProduct: null,
  newArrivalProductsRequest: async () => {
    let res = await axios.get(baseURL + `/all-products/0/0/0/0/8/1`, {
      withCredentials: true,
      credentials: "include",
    });

    if (res?.data?.success === true) {
      set({ allProduct: res?.data?.data?.products });
    }
  },
}));

export default productStore;
