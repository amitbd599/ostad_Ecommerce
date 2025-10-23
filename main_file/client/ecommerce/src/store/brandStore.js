import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";

const brandStore = create((set) => ({
  // all-brand
  allBrand: null,
  allBrandRequest: async (per_page, page_no) => {
    let res = await axios.get(baseURL + `/all-brand/${per_page}/${page_no}`, {
      withCredentials: true,
      credentials: "include",
    });

    if (res?.data?.success === true) {
      set({ allBrand: res?.data?.data?.brands });
    }
  },
}));

export default brandStore;
