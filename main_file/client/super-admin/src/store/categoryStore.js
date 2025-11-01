import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const categoryStore = create((set) => ({
  // create-category
  createCategoryLoading: false,
  createCategoryRequest: async (data) => {
    try {
      set({ createCategoryLoading: true });
      let res = await axios.post(baseURL + `/create-category`, data, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        set({ createCategoryLoading: false });
        SuccessToast(res?.data?.message);
        return true;
      } else {
        set({ createCategoryLoading: false });
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (error) {
      console.log(error);
      set({ createCategoryLoading: false });
      return false;
    }
  },

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
