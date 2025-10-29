import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const AllOrders = () => {
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
  return (
    <>
      <div className='cover-photo  overflow-hidden '>
        <div className='avatar-upload p-5'>
          <h2>Supper Admin</h2>
          <h5>All Orders</h5>
        </div>
      </div>
      <div className='dashboard-body__content mt-0'>
        {/* ========================= Statement section start =========================== */}
        <div className='row gy-4'>
          <div className='col-12'>
            <div className='card common-card border border-gray-five'>
              <div className='card-body'>
                <div className='table-responsive'>
                  <table className='table text-body '>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#DR54745425478 </td>
                        <td>2022-12-31 03:36 AM</td>
                        <td> 500</td>
                        <td>
                          <div className='d-flex justify-content-end gap-2'>
                            <button
                              className='btn btn-success'
                              data-bs-toggle='modal'
                              data-bs-target={`#exampleModal_${1}`}
                            >
                              View order
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='flx-between gap-2'>
                    <div className='paginate-content flx-align flex-nowrap gap-3'>
                      <select
                        className='select common-input py-2 px-3 w-auto'
                        defaultValue={1}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                      <span className='paginate-content__text fs-14'>
                        Showing 1 - 10 of 100
                      </span>
                    </div>
                    <nav aria-label='Page navigation example'>
                      <ul className='pagination common-pagination mt-0'>
                        <li className='page-item'>
                          <Link className='page-link' to='#'>
                            1
                          </Link>
                        </li>
                        <li className='page-item active'>
                          <Link className='page-link' to='#'>
                            2
                          </Link>
                        </li>
                        <li className='page-item'>
                          <Link className='page-link' to='#'>
                            3
                          </Link>
                        </li>
                        <li className='page-item'>
                          <Link className='page-link' to='#'>
                            4
                          </Link>
                        </li>
                        <li className='page-item'>
                          <Link
                            className='page-link flx-align gap-2 flex-nowrap'
                            to='#'
                          >
                            Next
                            <span className='icon line-height-1 font-20'>
                              <i className='las la-arrow-right' />
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========================= Statement section End =========================== */}
      </div>

      {/*  */}
      <>
        <div
          className='modal fade order_item'
          id={`exampleModal_${1}`}
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
                              <p className='mb-0'>#INV-000123</p>
                              <small>Date: Oct 03, 2025</small>
                            </div>
                            <div className='col-sm-6 text-end'>
                              <h5 className='fw-bold'>Your Shop Name</h5>
                              <p className='mb-0'>123 Street, Dhaka</p>
                              <p className='mb-0'>support@email.com</p>
                              <p className='mb-0'>+880 1234 567 890</p>
                            </div>
                          </div>

                          {/* Billing Details */}
                          <div className='row mb-4'>
                            <div className='col-sm-6'>
                              <h6 className='fw-bold'>Bill To:</h6>
                              <p className='mb-0'>Amit Biswas</p>
                              <p className='mb-0'>456 Avenue Road</p>
                              <p className='mb-0'>Chittagong, Bangladesh</p>
                            </div>
                            <div className='col-sm-6 text-end'>
                              <h6 className='fw-bold'>Payment Method:</h6>
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
    </>
  );
};

export default AllOrders;
