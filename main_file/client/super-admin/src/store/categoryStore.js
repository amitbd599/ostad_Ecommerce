import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";

const categoryStore = create((set) => ({
  // all-category
  allCategory: null,
  allCategoryRequest: async (per_page, page_no) => {
    let res = await axios.get(
      baseURL + `/all-category/${per_page}/${page_no}`,
      {
        withCredentials: true,
        credentials: "include",
      }
    );

    if (res?.data?.success === true) {
      set({ allCategory: res?.data?.data?.categories });
    }
  },
}));

export default categoryStore;
