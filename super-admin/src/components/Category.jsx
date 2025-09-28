import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo  overflow-hidden'>
        <div className='avatar-upload p-5 mb-5'>
          <h2>Supper Admin</h2>
          <h5>Create Category</h5>
        </div>
      </div>
      {/* Cover Photo End */}
      <div className='dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100 pt-2'>
        {/* Profile Content Start */}
        <div className='profile'>
          <div className='row gy-4'>
            <div className='col-12 '>
              <div className='dashboard-card'>
                <div className='profile-info-content'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div className='tab-pane fade show active'>
                      <form action='#' autoComplete='off'>
                        <div className='row gy-4'>
                          <div>
                            <label
                              htmlFor='fName'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              Create Category
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              defaultValue='Mobile'
                              placeholder='Enter Category name'
                            />
                          </div>

                          <div className='col-sm-12 text-end'>
                            <button className='btn btn-main btn-lg pill mt-4'>
                              {" "}
                              Create Category
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 '>
              <div className='card common-card border border-gray-five'>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table className='table text-body '>
                      <thead>
                        <tr>
                          <th>Category Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mobile</td>
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
                        <tr>
                          <td>Mobile</td>
                          <td>
                            <div className='d-flex justify-content-end gap-2'>
                              <button className='btn btn-success'>Edit</button>
                              <button className='btn btn-danger'>Delete</button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mobile</td>
                          <td>
                            <div className='d-flex justify-content-end gap-2'>
                              <button className='btn btn-success'>Edit</button>
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
        </div>
        {/* Profile Content End */}
      </div>

      {/* Category update section */}
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
                  Update Category Name
                </h6>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>
                <div className='dashboard-card'>
                  <div className='profile-info-content'>
                    <div className='tab-content' id='pills-tabContent'>
                      <div className='tab-pane fade show active'>
                        <form action='#' autoComplete='off'>
                          <div className='row gy-4'>
                            <div>
                              <input
                                type='text'
                                className='common-input border'
                                defaultValue='Mobile'
                                placeholder='Enter Category name'
                              />
                            </div>
                          </div>
                        </form>
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
                  Update Category
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Category;
