import { Link, useNavigate, useSearchParams } from "react-router-dom";
import reviewStore from "../store/reviewStore";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import invoiceStore from "../store/invoiceStore";
import { formatDate } from "../helper/helper";
import { baseURLFile } from "../helper/config";

const DashboardReview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const per_page = 12;
  const page_no = searchParams.get("page_no") || 1;
  let {
    createReviewRequest,
    createReviewLoading,
    allReviewRequest,
    allReview,
    totalReview,
  } = reviewStore();

  let {
    readInvoiceProductListSingleUserRequest,
    readInvoiceProductListSingleUser,
  } = invoiceStore();

  useEffect(() => {
    readInvoiceProductListSingleUserRequest(per_page, page_no);
  }, [readInvoiceProductListSingleUserRequest, page_no, per_page]);

  //! pagination function
  const handelPageClick = async (event) => {
    let page_no = event.selected;
    await allReviewRequest(per_page, page_no + 1);

    navigate(`/dashboard-review?page_no=${page_no + 1}`);
  };

  let submitReview = () => {
    createReviewRequest(per_page, page_no);
  };

  console.log(readInvoiceProductListSingleUser);

  return (
    <div className='dashboard-body__content'>
      {/* ===================== Review Section Start ========================== */}
      <div className='card common-card border border-gray-five'>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table text-body mt--24'>
              <thead>
                <tr>
                  <th>Product | Date</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {readInvoiceProductListSingleUser?.map((item, index) => (
                  <tr>
                    <td key={index}>
                      <div className='review-product d-flex align-items-center gap-2'>
                        <div className='review-product__thumb flex-shrink-0'>
                          <img
                            src={`${baseURLFile}/${item?.product?.images?.[0]}`}
                            alt=''
                          />
                        </div>
                        <div className='review-product__content'>
                          <h6 className='review-product__name font-15 fw-500 mb-0'>
                            <Link to='/profile' className='link'>
                              {item?.product_name}
                            </Link>
                          </h6>
                          <span className='review-product__date font-12'>
                            {formatDate(item?.createdAt)}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='product-user font-12'>
                        <strong className='fw-600 text-heading d-block'>
                          {item?.color}
                        </strong>
                      </div>
                    </td>
                    <td>
                      <div className='product-user font-12'>
                        <strong className='fw-600 text-heading d-block'>
                          {item?.size}
                        </strong>
                      </div>
                    </td>
                    <td>
                      <div className='product-user font-12'>
                        <strong className='fw-600 text-heading d-block'>
                          {item?.price}
                        </strong>
                      </div>
                    </td>

                    <td>
                      <Link to='#' className='btn btn-main'>
                        Make a review
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='flx-between gap-2'>
              <nav aria-label='Page navigation example'>
                {totalReview > per_page ? (
                  <div>
                    <ReactPaginate
                      className='pagination common-pagination'
                      previousLabel='<'
                      nextLabel='>'
                      pageClassName='page-item'
                      activeClassName='pagination'
                      pageLinkClassName=' page-link'
                      previousClassName='page-item'
                      previousLinkClassName='page-link flx-align gap-2 flex-nowrap'
                      nextClassName='page-item'
                      nextLinkClassName='page-link flx-align gap-2 flex-nowrap'
                      activeLinkClassName=' pagination active'
                      breakLabel='...'
                      pageCount={totalProducts / per_page}
                      initialPage={page_no - 1}
                      pageRangeDisplayed={3}
                      onPageChange={handelPageClick}
                      type='button'
                    />
                  </div>
                ) : (
                  ""
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Review Section End ========================== */}
    </div>
  );
};

export default DashboardReview;
