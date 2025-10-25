import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const userStore = create((set) => ({
  // user-register
  userRegisterLoading: false,
  userRegisterRequest: async (data) => {
    try {
      set({ userRegisterLoading: true });
      let res = await axios.post(baseURL + `/user-register`, data, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        set({ userRegisterLoading: false });
        SuccessToast(res?.data?.message);
        return true;
      } else {
        set({ userRegisterLoading: false });
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (error) {
      console.log(error);
      set({ userRegisterLoading: false });
      return false;
    }
  },
}));

export default userStore;
