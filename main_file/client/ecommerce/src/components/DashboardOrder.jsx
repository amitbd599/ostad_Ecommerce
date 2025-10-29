import { Link } from "react-router-dom";
import invoiceStore from "../store/invoiceStore";
import { useEffect } from "react";
import { formatDate } from "../helper/helper";
import { useCallback, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import userStore from "../store/userStore";

const DashboardOrder = () => {
  let {
    readAllInvoiceSingleUser,
    allInvoiceSingleUserRequest,
    readSingleInvoiceSingleUser,
    singleInvoiceSingleUserRequest,
  } = invoiceStore();

  let { userRequest, user } = userStore();

  useEffect(() => {
    (async () => {
      await userRequest();
      await allInvoiceSingleUserRequest();
    })();
  }, [allInvoiceSingleUserRequest, userRequest]);

  const componentRef = useRef(null);

  const handleAfterPrint = useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = useCallback(() => {
    console.log("`onBeforePrint` called");
    return Promise.resolve();
  }, []);

  const printFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
    onAfterPrint: handleAfterPrint,
    onBeforePrint: handleBeforePrint,
    copyStyles: true, // 👈 copies styles from your app into print iframe
    pageStyle: `
    @page {
      size: A4;
      margin: 4mm;
    }
    body {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    table {
      border-collapse: collapse !important;
      width: 100%;
    }
    th, td {
      border: 1px solid #ccc !important;
      padding: 6px !important;
    }
  `,
  });

  let viewOrder = (id) => {
    singleInvoiceSingleUserRequest(id);
  };

  return (
    <div className='dashboard-body__content'>
      {/* ========================= Statement section start =========================== */}
      <div className='row gy-4'>
        <div className='col-12'>
          <div className='card common-card border border-gray-five'>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table text-body mt--24'>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Transaction ID</th>
                      <th>Order ID</th>
                      <th>Deliver status</th>
                      <th>Payment status</th>
                      <th>Total Payable</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {readAllInvoiceSingleUser?.map((item, index) => (
                      <tr key={index}>
                        <td>{formatDate(item?.createdAt)}</td>
                        <td>{item?.tran_id}</td>
                        <td>
                          <span>{item?._id}</span>
                        </td>
                        <td>
                          <span
                            className={`badge rounded-pill ${
                              item?.deliver_status === "delivered"
                                ? "bg-success"
                                : item?.deliver_status === "pending"
                                ? "bg-warning"
                                : "bg-danger"
                            }`}
                          >
                            {item?.deliver_status}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge rounded-pill ${
                              item?.payment_status === "success"
                                ? "bg-success"
                                : item?.payment_status === "cancel"
                                ? "bg-warning"
                                : "bg-danger"
                            }`}
                          >
                            {item?.payment_status}
                          </span>{" "}
                        </td>
                        <td>
                          <p> {item?.payable}</p>
                        </td>
                        <td>
                          <button
                            className='btn btn-success'
                            data-bs-toggle='modal'
                            data-bs-target={`#exampleModal_1`}
                            onClick={() => viewOrder(item?._id)}
                          >
                            View order
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ========================= Statement section End =========================== */}

      {/*  */}
      <>
        <div
          className='modal fade order_item'
          id={`exampleModal_1`}
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h6 className='modal-title fs-5' id='exampleModalLabel'>
                  Update Product
                </h6>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>
                <div className='profile'>
                  <div className='row gy-4'>
                    <div className='col-12'>
                      <div className='container my-5'>
                        {/* Invoice Content */}
                        <div className='p-5 bg-white' ref={componentRef}>
                          {/* Header */}
                          <div className='row mb-4 border-bottom pb-3'>
                            <div className='col-sm-6'>
                              <h2 className='fw-bold'>INVOICE</h2>
                              <p className='mb-0'>
                                #INV-
                                {readSingleInvoiceSingleUser?.[0]?.invoice_id}
                              </p>
                              <small>Date: Oct 03, 2025</small>
                            </div>
                            <div className='col-sm-6 text-end'>
                              <h5 className='fw-bold'>PixBO</h5>
                              <p className='mb-0'>123 Street, Chittagong</p>
                              <p className='mb-0'>support@pixbo.com</p>
                              <p className='mb-0'>+880 1234 567 890</p>
                            </div>
                          </div>

                          {/* Billing Details */}
                          <div className='row mb-4'>
                            <div className='col-sm-6'>
                              <h6 className='fw-bold'>Bill To:</h6>
                              <p className='mb-0'>{user?.cus_name}</p>
                              <p className='mb-0'>{user?.cus_add}</p>
                              <p className='mb-0'>
                                {user?.cus_state}, {user?.cus_country}
                              </p>
                              <p className='mb-0'>{user?.email}</p>
                            </div>
                            <div className='col-sm-6 text-end'>
                              <h6 className='fw-bold'>
                                Payment status:{" "}
                                {
                                  readSingleInvoiceSingleUser?.[0]
                                    ?.payment_status
                                }
                              </h6>
                              <p className='mb-0'>Credit Card</p>
                              <p className='mb-0'>Visa ending **** 5678</p>
                            </div>
                          </div>

                          {/* Table */}
                          <div className='table-responsive mb-4'>
                            <table className='table table-bordered align-middle'>
                              <thead className='table-light'>
                                <tr>
                                  <th>Item</th>
                                  <th className='text-center'>Quantity</th>
                                  <th className='text-end'>Price</th>
                                  <th className='text-end'>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Nike Sneakers</td>
                                  <td className='text-center'>2</td>
                                  <td className='text-end'>$120</td>
                                  <td className='text-end'>$240</td>
                                </tr>
                                <tr>
                                  <td>T-Shirt</td>
                                  <td className='text-center'>3</td>
                                  <td className='text-end'>$25</td>
                                  <td className='text-end'>$75</td>
                                </tr>
                                <tr>
                                  <td>Backpack</td>
                                  <td className='text-center'>1</td>
                                  <td className='text-end'>$80</td>
                                  <td className='text-end'>$80</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          {/* Summary */}
                          <div className='row justify-content-end'>
                            <div className='col-md-4'>
                              <ul className='list-unstyled'>
                                <li className='d-flex justify-content-between mb-2'>
                                  <span>Subtotal:</span> <span>$395</span>
                                </li>
                                <li className='d-flex justify-content-between mb-2'>
                                  <span>Tax (5%):</span> <span>$19.75</span>
                                </li>
                                <li className='d-flex justify-content-between border-top pt-2 fw-bold'>
                                  <span>Total:</span> <span>$414.75</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className='text-center mt-5 text-muted small'>
                            <p className='mb-1'>Thank you for your purchase!</p>
                            <p>
                              This invoice was generated electronically and is
                              valid without a signature.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  onClick={printFn}
                  type='button'
                  className='btn btn-primary'
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default DashboardOrder;
