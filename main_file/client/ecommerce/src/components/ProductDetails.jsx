import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import parse from "html-react-parser";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import productStore from "../store/productStore";
import { baseURLFile } from "../helper/config";
import Skeleton from "react-loading-skeleton";
import { ErrorToast, formatDate, IsEmpty } from "../helper/helper";
import cartStore from "../store/cartStore";
import reviewStore from "../store/reviewStore";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

const ProductDetails = () => {
  const [searchParams] = useSearchParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();
  let [data, setData] = useState({
    size: "",
    color: "",
    qty: 1,
    activeColor: null,
    activeSize: null,
  });

  const product_id = searchParams.get("product_id");

  // product Store
  let { singleProduct, singleProductsRequest } = productStore();
  useEffect(() => {
    (async () => {
      await singleProductsRequest(product_id);
    })();
  }, [product_id, singleProductsRequest]);

  // cart Store
  let { createCartLoading, createCartRequest, allCartRequest } = cartStore();

  // Validation rules
  const validations = [
    { field: product_id, message: "product_id is required!" },
    { field: singleProduct?.title, message: "title is required!" },
    { field: data.color, message: "color is required!" },
    { field: data.qty, message: "qty is required!" },
    { field: data.size, message: "size is required!" },
  ];
  let cartSubmit = async () => {
    for (const { field, message } of validations) {
      if (IsEmpty(field)) {
        return ErrorToast(message);
      }
    }

    let submitData = {
      product_id,
      product_name: singleProduct?.title,
      color: data.color,
      qty: data.qty,
      size: data.size,
    };
    let res = await createCartRequest(submitData);
    if (res === 401) {
      navigate("/login");
    }
    await allCartRequest();
  };

  // Review Store
  let { allReviewByProductRequest, allReviewByProduct } = reviewStore();
  useEffect(() => {
    (async () => {
      await allReviewByProductRequest(product_id);
    })();
  }, [product_id, allReviewByProductRequest]);

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

  const discount =
    ((singleProduct?.price - singleProduct?.discount_price) /
      singleProduct?.price) *
    100;

  console.log(allReviewByProduct);

  return (
    <div className='product-details mt-32 padding-b-120'>
      <div className='container container-two'>
        <div className='row gy-4'>
          {singleProduct === null ? (
            <>
              {[...Array(6)].map(() => (
                <div className='col-lg-6'>
                  <div className='Skeleton'>
                    <Skeleton count={8} />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className='col-lg-6'>
              <div className='tab-content' id='pills-tabContent'>
                <div
                  className='tab-pane fade show active'
                  id='pills-product-details'
                  role='tabpanel'
                  aria-labelledby='pills-product-details-tab'
                  tabIndex={0}
                >
                  {/* Product Details Content Start */}
                  <div className='product-details'>
                    <div>
                      <Swiper
                        style={{
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='mySwiper2'
                      >
                        {singleProduct?.images?.map((img, index) => (
                          <SwiperSlide key={index}>
                            <img src={`${baseURLFile}/${img}`} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='mySwiper'
                      >
                        {singleProduct?.images?.map((img, index) => (
                          <SwiperSlide key={index}>
                            <img src={`${baseURLFile}/${img}`} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <h3 className='product-details__desc'>
                      Product Description
                    </h3>
                    <div className='product-details__item'>
                      <h5 className='product-details__title mb-3'>
                        Template Features
                      </h5>

                      {/* description */}
                      <div>{parse(singleProduct?.description || "")}</div>
                    </div>
                  </div>
                  {/* Product Details Content End */}
                </div>
                <div
                  className='tab-pane fade'
                  id='pills-rating'
                  role='tabpanel'
                  aria-labelledby='pills-rating-tab'
                  tabIndex={0}
                >
                  <div className='product-review-wrapper'>
                    {allReviewByProduct?.map((item, index) => (
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
                              For{" "}
                              <span className='product-review__subject'>
                                Customer Support
                              </span>{" "}
                            </span>
                          </div>
                          <div className='product-review__date'>
                            by{" "}
                            <strong className='product-review__user text--base'>
                              {item?.user?.cus_name}
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
                </div>
              </div>
            </div>
          )}

          {singleProduct === null ? (
            <>
              {[...Array(6)].map(() => (
                <div className='col-lg-6'>
                  <div className='Skeleton'>
                    <Skeleton count={8} />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className='col-lg-6'>
              {/* ======================= Product Sidebar Start ========================= */}
              <div className='product-sidebar pt-0'>
                <div className='product-sidebar__top position-relative flx-between gap-1'>
                  <div className='title_box'>
                    <h3 className='product-sidebar__title'>
                      {singleProduct?.title}
                    </h3>
                  </div>

                  <div className='price py-3'>
                    <h4>
                      {singleProduct?.is_discount === false
                        ? `৳${singleProduct?.price}`
                        : `৳${singleProduct?.discount_price}`}{" "}
                      <del>
                        {" "}
                        {singleProduct?.is_discount === false
                          ? ""
                          : `৳${singleProduct?.price}`}
                      </del>{" "}
                      <span className='discount_percent'>
                        - {discount.toFixed(0)}% Off
                      </span>
                    </h4>
                    <p>{singleProduct?.sort_description}</p>
                  </div>

                  <div className='size py-3'>
                    <h4>Size: {data?.size}</h4>
                    <div className='size_varient'>
                      {singleProduct?.size?.map((item, index) => (
                        <button
                          className={data?.activeSize === index && "active"}
                          key={index}
                          onClick={() => {
                            setData({
                              ...data,
                              size: item,
                              activeSize: index,
                            });
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className='color py-3'>
                    <h4>Color: {data?.color}</h4>
                    <div className='size_varient'>
                      {singleProduct?.color?.map((item, index) => (
                        <button
                          className={data?.activeColor === index && "active"}
                          key={index}
                          onClick={() => {
                            setData({
                              ...data,
                              color: item,
                              activeColor: index,
                            });
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className='quantity py-3'>
                    <div className='w-100'>
                      <div className='inner'>
                        <button
                          className='btn-quantity btn-decrease'
                          onClick={() =>
                            setData({
                              ...data,
                              qty: data.qty > 1 ? data.qty - 1 : 1,
                            })
                          }
                        >
                          -
                        </button>
                        <span className='quantity-product'>{data.qty}</span>
                        <button
                          onClick={() =>
                            setData({
                              ...data,
                              qty: data.qty + 1,
                            })
                          }
                          className='btn-quantity btn-increase'
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className='w-100'>
                      <button
                        disabled={createCartLoading}
                        onClick={cartSubmit}
                        className='btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 '
                      >
                        <img src='assets/images/icons/add-to-cart.svg' alt='' />

                        {createCartLoading ? "Loading..." : "Add To Cart"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Author Details End */}
                {/* Meta Attribute List Start */}
                <ul className='meta-attribute'>
                  <li className='meta-attribute__item'>
                    <span className='name'>Last Update</span>
                    <span className='details'>
                      {formatDate(singleProduct?.updatedAt)}
                    </span>
                  </li>
                  <li className='meta-attribute__item'>
                    <span className='name'>Published</span>
                    <span className='details'>
                      {" "}
                      {formatDate(singleProduct?.createdAt)}
                    </span>
                  </li>
                  <li className='meta-attribute__item'>
                    <span className='name'>Category</span>
                    <span className='details'>
                      {singleProduct?.category?.[0]?.category_name}
                    </span>
                  </li>
                  <li className='meta-attribute__item'>
                    <span className='name'>Brand</span>
                    <span className='details'>
                      {singleProduct?.brand?.[0]?.brand_name}
                    </span>
                  </li>

                  <li className='meta-attribute__item'>
                    <span className='name'>Is Discount</span>
                    <span className='details'>
                      {singleProduct?.is_discount ? "True" : "False"}
                    </span>
                  </li>
                  <li className='meta-attribute__item'>
                    <span className='name'>Discount Percent</span>
                    <span className='details'>{discount.toFixed(0)}%</span>
                  </li>
                </ul>
                {/* Meta Attribute List End */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
