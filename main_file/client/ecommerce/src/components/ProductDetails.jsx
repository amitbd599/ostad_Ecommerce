import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='product-details mt-32 padding-b-120'>
      <div className='container container-two'>
        <div className='row gy-4'>
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
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
                      </SwiperSlide>
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
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <p className='product-details__desc'>
                    System management saas products, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident.
                  </p>
                  <div className='product-details__item'>
                    <h5 className='product-details__title mb-3'>
                      Template Features
                    </h5>
                    <ul className='product-list'>
                      <li className='product-list__item'>
                        Modern and Professional design
                      </li>
                      <li className='product-list__item'>
                        Built with Elementor Pro
                      </li>
                      <li className='product-list__item'>
                        100% Responsive &amp; mobile-friendly
                      </li>
                      <li className='product-list__item'>
                        12+ pre-built templates
                      </li>
                      <li className='product-list__item'>Easy to customize</li>
                      <li className='product-list__item'>
                        Fully responsive website
                      </li>
                    </ul>
                  </div>
                  <div className='product-details__item'>
                    <h5 className='product-details__title mb-3'>
                      Layout Features
                    </h5>
                    <ul className='product-list'>
                      <li className='product-list__item'>
                        One-Click demo import
                      </li>
                      <li className='product-list__item'>
                        Unlimited color style
                      </li>
                      <li className='product-list__item'>850+ google fonts</li>
                      <li className='product-list__item'>
                        Powered by dpmarket
                      </li>
                      <li className='product-list__item'>
                        Hight resolution images
                      </li>
                      <li className='product-list__item'>Easy to customize</li>
                    </ul>
                  </div>
                  <div className='product-details__item'>
                    <h5 className='product-details__title mb-3'>Font Family</h5>
                    <ul className='product-list'>
                      <li className='product-list__item text-heading'>
                        <Link
                          to='https://fonts.google.com/specimen/Fira+Sans?query=fira'
                          className='link text-body hover-text-main hover-text-decoration-underline'
                        >
                          Fira Sans
                        </Link>
                      </li>
                      <li className='product-list__item text-heading'>
                        <Link
                          to='https://fonts.google.com/specimen/Inter?query=inter'
                          className='link text-body hover-text-main hover-text-decoration-underline'
                        >
                          Inter
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='product-details__item'>
                    <h5 className='product-details__title mb-3'>Support</h5>
                    <p className='product-details__desc'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident.
                    </p>
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
                  <div className='product-review'>
                    <div className='product-review__top flx-between'>
                      <div className='product-review__rating flx-align'>
                        <div className='d-flex align-items-center gap-1'>
                          <ul className='star-rating'>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                          </ul>
                          <span className='star-rating__text text-body'>
                            {" "}
                            5.0
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
                        <Link
                          to='#'
                          className='product-review__user text--base'
                        >
                          John Doe{" "}
                        </Link>{" "}
                        2 month ago
                      </div>
                    </div>
                    <div className='product-review__body'>
                      <p className='product-review__desc'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quibusdam itaque vitae ex possimus delectus?
                        Voluptas expedita accusantium aperiam quo quod dolore
                        dignissimos rerum praesentium deserunt libero recusandae
                        quisquam est accusamus eos dolorum sit explicabo,
                        sapiente pariatur voluptates veniam aut veritatis,
                        magnam velit similique! Ex similique magni labore
                        aperiam, eius quas molestiae accusantium porro eaque
                        esse minus amet doloribus quo odit illo doloremque.
                      </p>
                    </div>
                  </div>
                  <div className='product-review'>
                    <div className='product-review__top flx-between'>
                      <div className='product-review__rating flx-align'>
                        <div className='d-flex align-items-center gap-1'>
                          <ul className='star-rating'>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                            <li className='star-rating__item font-11'>
                              <i className='fas fa-star' />
                            </li>
                          </ul>
                          <span className='star-rating__text text-body'>
                            {" "}
                            5.0
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
                        <Link
                          to='#'
                          className='product-review__user text--base'
                        >
                          John Doe{" "}
                        </Link>{" "}
                        2 month ago
                      </div>
                    </div>
                    <div className='product-review__body'>
                      <p className='product-review__desc'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quibusdam itaque vitae ex possimus delectus?
                        Voluptas expedita accusantium aperiam quo quod dolore
                        dignissimos rerum praesentium deserunt libero recusandae
                        quisquam est accusamus eos dolorum sit explicabo,
                        sapiente pariatur voluptates veniam aut veritatis,
                        magnam velit similique! Ex similique magni labore
                        aperiam, eius quas molestiae accusantium porro eaque
                        esse minus amet doloribus quo odit illo doloremque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='pills-comments'
                role='tabpanel'
                aria-labelledby='pills-comments-tab'
                tabIndex={0}
              >
                {/* Comment Start */}
                <div className='comment mt-64 mb-64'>
                  <h5 className='mb-32'>2 Comments</h5>
                  <ul className='comment-list'>
                    <li className='comment-list__item d-flex align-items-start gap-sm-4 gap-3'>
                      <div className='comment-list__thumb flex-shrink-0'>
                        <img
                          src='assets/images/thumbs/comment1.png'
                          className='cover-img'
                          alt=''
                        />
                      </div>
                      <div className='comment-list__content'>
                        <div className='flx-between gap-2 align-items-start'>
                          <div>
                            <h6 className='comment-list__name font-18 mb-sm-2 mb-1'>
                              Jenny Wilson
                            </h6>
                            <span className='comment-list__date font-14'>
                              Jan 21, 2024 at 11:25 pm
                            </span>
                          </div>
                          <Link
                            className='comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline'
                            to='#comment-box'
                          >
                            Reply
                            <span className='icon'>
                              <img
                                src='assets/images/icons/reply-icon.svg'
                                alt=''
                              />
                            </span>
                          </Link>
                        </div>
                        <p className='comment-list__desc mt-3'>
                          Lorem ipsum dolor sit amet consectetur. Nec nunc
                          pellentesque massa pretium. Quam sapien nec venenatis
                          vivamus sed cras faucibus mi viverra. Quam faucibus
                          morbi cras vitae neque. Necnunc pellentesque massa
                          pretium.
                        </p>
                      </div>
                    </li>
                    <li>
                      <ul className='comment-list comment-list--two'>
                        <li className='comment-list__item d-flex align-items-start gap-sm-4 gap-3'>
                          <div className='comment-list__thumb flex-shrink-0'>
                            <img
                              src='assets/images/thumbs/comment2.png'
                              className='cover-img'
                              alt=''
                            />
                          </div>
                          <div className='comment-list__content'>
                            <div className='flx-between gap-2 align-items-start'>
                              <div>
                                <h6 className='comment-list__name font-18 mb-sm-2 mb-1'>
                                  Courtney Henry
                                </h6>
                                <span className='comment-list__date font-14'>
                                  Jan 21, 2024 at 11:25 pm
                                </span>
                              </div>
                              <Link
                                className='comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline'
                                to='#comment-box'
                              >
                                Reply
                                <span className='icon'>
                                  <img
                                    src='assets/images/icons/reply-icon.svg'
                                    alt=''
                                  />
                                </span>
                              </Link>
                            </div>
                            <p className='comment-list__desc mt-3'>
                              Lorem ipsum dolor sit amet consectetur. Nec nunc
                              pellentesque massa pretium. Quam sapien nec
                              venenatis vivamus sed cras faucibus.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* Comment End */}
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            {/* ======================= Product Sidebar Start ========================= */}
            <div className='product-sidebar pt-0'>
              <div className='product-sidebar__top position-relative flx-between gap-1'>
                <div className='title_box'>
                  <h3 className='product-sidebar__title'>
                    Casual Round Neck T-Shirt
                  </h3>
                </div>

                <div className='price py-3'>
                  <h4>
                    $170 <del>$196</del>{" "}
                    <span className='discount_percent'>- 19% Off</span>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam, mollitia?
                  </p>
                </div>

                <div className='size py-3'>
                  <h4>Size: M</h4>
                  <div className='size_varient'>
                    <button className='active'>M</button>
                    <button>L</button>
                    <button>S</button>
                    <button>XS</button>
                  </div>
                </div>

                <div className='color py-3'>
                  <h4>Color: Black</h4>
                  <div className='size_varient'>
                    <button className='active'>Blue</button>
                    <button>Dark</button>
                    <button>Black</button>
                    <button>White</button>
                  </div>
                </div>
                <div className='quantity py-3'>
                  <div className='w-100'>
                    <div className='inner'>
                      <button className='btn-quantity btn-decrease'>-</button>
                      <span className='quantity-product'>2</span>
                      <button className='btn-quantity btn-increase'>+</button>
                    </div>
                  </div>
                  <div className='w-100'>
                    <button
                      type='button'
                      className='btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 '
                    >
                      <img src='assets/images/icons/add-to-cart.svg' alt='' />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Details End */}
              {/* Meta Attribute List Start */}
              <ul className='meta-attribute'>
                <li className='meta-attribute__item'>
                  <span className='name'>Last Update</span>
                  <span className='details'>Feb 21, 2024</span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>Published</span>
                  <span className='details'>Feb 15, 2024</span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>Category</span>
                  <span className='details'>Ecommerce</span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>SKU</span>
                  <span className='details'>Yes</span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>Is Discount</span>
                  <span className='details'>Yes</span>
                </li>
              </ul>
              {/* Meta Attribute List End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
