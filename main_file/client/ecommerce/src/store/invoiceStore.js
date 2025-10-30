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

  // read-all-invoice-single-user
  readAllInvoiceSingleUser: null,
  allInvoiceSingleUserRequest: async () => {
    try {
      let res = await axios.get(baseURL + `/read-all-invoice-single-user`, {
        withCredentials: true,
        credentials: "include",
      });

      if (res?.data?.success === true) {
        set({ readAllInvoiceSingleUser: res?.data?.data });
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  // read-single-invoice-single-user
  readSingleInvoiceSingleUser: null,
  singleInvoiceSingleUserRequest: async (id) => {
    try {
      let res = await axios.get(
        baseURL + `/read-single-invoice-single-user/${id}`,
        {
          withCredentials: true,
          credentials: "include",
        }
      );

      if (res?.data?.success === true) {
        set({ readSingleInvoiceSingleUser: res?.data?.data });
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  // read-invoice-product-list-single-user
  totalInvoiceProduct: null,
  readInvoiceProductListSingleUser: null,
  readInvoiceProductListSingleUserRequest: async (per_page, page_no) => {
    try {
      let res = await axios.get(
        baseURL +
          `/read-invoice-product-list-single-user/${per_page}/${page_no}`,
        {
          withCredentials: true,
          credentials: "include",
        }
      );

      if (res?.data?.success === true) {
        set({ readInvoiceProductListSingleUser: res?.data?.data?.products });
        set({ totalInvoiceProduct: res?.data?.data?.totalCount?.[0]?.count });
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },
}));

export default invoiceStore;
