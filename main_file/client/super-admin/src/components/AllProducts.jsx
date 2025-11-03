import { Link, useNavigate, useSearchParams } from "react-router-dom";
import productStore from "../store/productStore";
import { useEffect } from "react";
import Paginate from "../helper/Paginate";
import Skeleton from "react-loading-skeleton";
import { baseURLFile, hostURL } from "../helper/config";

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let { allProducts, totalProducts, allProductsRequest } = productStore();
  const per_page = 12;
  const page_no = searchParams.get("page_no") || 1;

  // all Category
  useEffect(() => {
    (async () => {
      await allProductsRequest(0, 0, 0, 0, per_page, page_no);
    })();
  }, [allProductsRequest, page_no]);

  //! pagination function
  const handelPageClick = async (event) => {
    let page_no = event.selected;
    await allProductsRequest(0, 0, 0, 0, per_page, page_no + 1); //"/:category_id/:brand_id/:remark/:keyword/:per_page/:page_no",

    navigate(`/all-products?page_no=${page_no + 1}`);
  };

  console.log(allProducts);

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
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Is Discount</th>
                        <th>Stock</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allProducts === null ? (
                        <>
                          {[...Array(4)].map(() => (
                            <div className='col-xl-4 col-sm-6'>
                              <div className='Skeleton'>
                                <Skeleton count={8} />
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          {allProducts?.map((item, index) => (
                            <tr key={index} className='super_admin_all-product'>
                              <td>
                                <img
                                  src={`${baseURLFile}/${item?.images?.[0]}`}
                                  alt=''
                                  className='cover-img'
                                />
                              </td>
                              <td>
                                {" "}
                                <h6 className='product-item__title'>
                                  <Link
                                    to={`${hostURL}/product-details?product_id=${item?._id}`}
                                    className='link'
                                  >
                                    {item?.title}
                                  </Link>
                                </h6>
                              </td>
                              <td>
                                <div className='flx-align gap-2'>
                                  <h6 className='product-item__price mb-0'>
                                    {item?.is_discount === false
                                      ? `৳${item?.price}`
                                      : `৳${item?.discount_price}`}
                                  </h6>
                                  <span className='product-item__prevPrice text-decoration-line-through'>
                                    {item?.is_discount === false
                                      ? ""
                                      : `৳${item?.price}`}
                                  </span>
                                </div>{" "}
                              </td>
                              <td> {item?.is_discount ? "Yes" : "No"}</td>
                              <td> {item?.stock}</td>
                              <td>
                                <div className='d-flex justify-content-end gap-2'>
                                  <button
                                    className='btn btn-success'
                                    data-bs-toggle='modal'
                                    data-bs-target={`#exampleModal_${1}`}
                                  >
                                    Edit
                                  </button>
                                  <button className='btn btn-danger'>
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                    </tbody>
                  </table>
                  <div className='flx-between justify-content-end gap-2'>
                    <nav aria-label='Page navigation example'>
                      <div>
                        <Paginate
                          handelPageClick={handelPageClick}
                          page_no={page_no}
                          per_page={per_page}
                          totalCount={totalProducts}
                        />
                      </div>
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
