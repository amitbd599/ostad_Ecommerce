import { Link } from "react-router-dom";

const AllProducts = () => {
  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo  overflow-hidden'>
        <div className='avatar-upload p-5'>
          <h2>Supper Admin</h2>
          <h5>All Product</h5>
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
                        <th>Title</th>
                        <th>Price</th>
                        <th>Is Discount</th>
                        <th>Stock</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Title</td>
                        <td>1254 </td>
                        <td> Yes/No</td>
                        <td> 100</td>
                        <td>
                          <div className='d-flex justify-content-end gap-2'>
                            <button
                              className='btn btn-success'
                              data-bs-toggle='modal'
                              data-bs-target={`#exampleModal_${1}`}
                            >
                              Edit
                            </button>
                            <button className='btn btn-danger'>Delete</button>
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
          className='modal fade'
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
                      <div className='dashboard-card'>
                        <div className='profile-info-content'>
                          <div className='tab-content' id='pills-tabContent'>
                            <div className='tab-pane fade show active'>
                              <form action='#' autoComplete='off'>
                                <div className='row gy-4'>
                                  <div className='col-sm-6 col-xs-6'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Title
                                    </label>
                                    <input
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-6 col-xs-6'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Short Description
                                    </label>
                                    <input
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Price
                                    </label>
                                    <input
                                      type='number'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Is Discount?
                                    </label>
                                    <div className='select-has-icon'>
                                      <select className='common-input border'>
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Discount Price
                                    </label>
                                    <input
                                      type='number'
                                      className='common-input border'
                                    />
                                  </div>

                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Category
                                    </label>
                                    <div className='select-has-icon'>
                                      <select className='common-input border'>
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Brand
                                    </label>
                                    <div className='select-has-icon'>
                                      <select className='common-input border'>
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Remark
                                    </label>
                                    <input
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Stock
                                    </label>
                                    <input
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Color
                                    </label>
                                    <input
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>

                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Size
                                    </label>
                                    <input
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>

                                  <div className='col-12'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Description
                                    </label>
                                    <textarea
                                      name=''
                                      id=''
                                      className='common-input border'
                                    ></textarea>
                                  </div>
                                  <div className='col-12'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Image
                                    </label>
                                    <textarea
                                      name=''
                                      id=''
                                      className='common-input border'
                                    ></textarea>
                                  </div>
                                </div>
                              </form>
                            </div>
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
                <button type='button' className='btn btn-primary'>
                  Update Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AllProducts;
