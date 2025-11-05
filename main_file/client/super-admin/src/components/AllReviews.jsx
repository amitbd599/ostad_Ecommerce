import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { formatDate } from "../helper/helper";
import reviewStore from "../store/reviewStore";
import { FaRegStar, FaStar } from "react-icons/fa";

const AllReviews = () => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();
  const per_page = 6;
  const page_no = searchParams.get("page_no") || 1;

  let { allReviewRequest, allReview, totalReview } = reviewStore();

  useEffect(() => {
    allReviewRequest(per_page, page_no);
  }, [allReviewRequest, page_no, per_page]);

  //! pagination function
  const handelPageClick = async (event) => {
    let page_no = event.selected;
    await allReviewRequest(per_page, page_no + 1);

    navigate(`/all-reviews?page_no=${page_no + 1}`);
  };

  const StarRating = ({ star }) => {
    star = parseInt(star);
    const totalStars = 5;
    const filledStars = Array(star).fill(<FaStar />);
    const emptyStars = Array(totalStars - star).fill(<FaRegStar />);

    return (
      <div className='star'>
        {filledStars.concat(emptyStars).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  return (
    <div className='dashboard-body__content'>
      {/* ===================== Review Section Start ========================== */}
      <div className='card common-card border border-gray-five'>
        <div className='card-body'>
          <div className='table-responsive'>
            <div className='product-review-wrapper'>
              {allReview?.map((item, index) => (
                <div key={index} className='product-review'>
                  <div className='product-review__top flx-between'>
                    <div className='product-review__rating flx-align'>
                      <div className='d-flex align-items-center gap-1'>
                        <div className='star'>
                          <StarRating star={item?.rating} />
                        </div>
                        <span className='star-rating__text text-body'>
                          {" "}
                          {item?.rating}.0
                        </span>
                      </div>
                      <span className='product-review__reason'>
                        <strong>Invoice ID:</strong> {item?.invoice_id}
                      </span>
                    </div>
                    <div className='product-review__date'>
                      by{" "}
                      <strong className='product-review__user text--base'>
                        cus_name
                      </strong>{" "}
                      ({formatDate(item?.updatedAt)})
                    </div>
                  </div>
                  <div className='product-review__body'>
                    <p className='product-review__desc'>{item?.des}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flx-between justify-content-end gap-2'>
              <nav aria-label='Page navigation example'>
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
                    pageCount={totalReview / per_page}
                    initialPage={page_no - 1}
                    pageRangeDisplayed={3}
                    onPageChange={handelPageClick}
                    type='button'
                  />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Review Section End ========================== */}
    </div>
  );
};

export default AllReviews;
