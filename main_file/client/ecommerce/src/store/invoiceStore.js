import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../helper/config";
import { ErrorToast, SuccessToast } from "../helper/helper";

const invoiceStore = create((set) => ({
  // create-invoice
  createInvoiceLoading: false,
  createInvoiceRequest: async () => {
    try {
      set({ createInvoiceLoading: true });
      let res = await axios.post(
        baseURL + "/create-invoice",
        {},
        {
          withCredentials: true,
          credentials: "include",
        }
      );

      //  if (res?.data?.success === true) {
      //   window.location.href = res?.data?.data?.GatewayPageURL;
      // }

      if (res?.data?.success === true) {
        set({ createInvoiceLoading: false });
        SuccessToast(res?.data?.message);
        window.location.href = res?.data?.data?.GatewayPageURL;
        return true;
      } else {
        set({ createInvoiceLoading: false });
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (error) {
      console.log(error);
      set({ createInvoiceLoading: false });
      return false;
    }
  },

  // read-cart
  allCart: null,
  allCartRequest: async () => {
    try {
      let res = await axios.get(baseURL + `/read-cart`, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        set({ allCart: res?.data?.data });
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },
}));

export default invoiceStore;
