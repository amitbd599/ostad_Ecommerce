import { Link } from "react-router-dom";
import { FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
const AllReviews = () => {
  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo  overflow-hidden'>
        <div className='avatar-upload p-5'>
          <h2>Supper Admin</h2>
          <h5>All Reviews</h5>
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
                        <th>Product Name</th>
                        <th>Purchase time</th>
                        <th>Invoice No</th>
                        <th>Message</th>
                        <th>Review</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Product Name</td>
                        <td>Purchase time </td>
                        <td> Invoice No</td>
                        <td> Message</td>
                        <td>
                          <FaStar />
                          <FaRegStarHalfStroke />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                        </td>
                        <td>
                          <div className='d-flex justify-content-end gap-2'>
                            <Link to='/' className='btn btn-success'>
                              Show product
                            </Link>
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
    </>
  );
};

export default AllReviews;
