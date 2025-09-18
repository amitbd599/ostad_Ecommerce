import { Link } from "react-router-dom";

const ArrivalOne = () => {
  return (
    <section className='arrival-product padding-y-120 section-bg position-relative z-index-1'>
      <img
        src='assets/images/gradients/product-gradient.png'
        alt=''
        className='bg--gradient white-version'
      />
      <img
        src='assets/images/shapes/element2.png'
        alt=''
        className='element one'
      />
      <div className='container container-two'>
        <div className='section-heading'>
          <h3 className='section-heading__title'>New Arrival Products</h3>
        </div>

        <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='pills-all'
            role='tabpanel'
            aria-labelledby='pills-all-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='product-item'>
                  <div className='product-item__thumb d-flex'>
                    <Link to='/product-details' className='link w-100'>
                      <img
                        src='assets/images/thumbs/product-img1.png'
                        alt=''
                        className='cover-img'
                      />
                    </Link>
                    <button type='button' className='product-item__wishlist'>
                      <i className='fas fa-heart' />
                    </button>
                  </div>
                  <div className='product-item__content'>
                    <h6 className='product-item__title'>
                      <Link to='/product-details' className='link'>
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className='product-item__info flx-between gap-2'>
                      <span className='product-item__author'>
                        by
                        <Link
                          to='/profile'
                          className='link hover-text-decoration-underline'
                        >
                          themepix
                        </Link>
                      </span>
                      <div className='flx-align gap-2'>
                        <h6 className='product-item__price mb-0'>$120</h6>
                        <span className='product-item__prevPrice text-decoration-line-through'>
                          $259
                        </span>
                      </div>
                    </div>
                    <div className='product-item__bottom flx-between gap-2'>
                      <div>
                        <span className='product-item__sales font-14 mb-2'>
                          1200 Sales
                        </span>
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
                          <span className='star-rating__text text-heading fw-500 font-14'>
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to='/product-details'
                        className='btn btn-outline-light btn-sm pill'
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='product-item'>
                  <div className='product-item__thumb d-flex'>
                    <Link to='/product-details' className='link w-100'>
                      <img
                        src='assets/images/thumbs/product-img2.png'
                        alt=''
                        className='cover-img'
                      />
                    </Link>
                    <button type='button' className='product-item__wishlist'>
                      <i className='fas fa-heart' />
                    </button>
                  </div>
                  <div className='product-item__content'>
                    <h6 className='product-item__title'>
                      <Link to='/product-details' className='link'>
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className='product-item__info flx-between gap-2'>
                      <span className='product-item__author'>
                        by
                        <Link
                          to='/profile'
                          className='link hover-text-decoration-underline'
                        >
                          themepix
                        </Link>
                      </span>
                      <div className='flx-align gap-2'>
                        <h6 className='product-item__price mb-0'>$129</h6>
                        <span className='product-item__prevPrice text-decoration-line-through'>
                          $236
                        </span>
                      </div>
                    </div>
                    <div className='product-item__bottom flx-between gap-2'>
                      <div>
                        <span className='product-item__sales font-14 mb-2'>
                          100 Sales
                        </span>
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
                          <span className='star-rating__text text-heading fw-500 font-14'>
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to='/product-details'
                        className='btn btn-outline-light btn-sm pill'
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='product-item'>
                  <div className='product-item__thumb d-flex'>
                    <Link to='/product-details' className='link w-100'>
                      <img
                        src='assets/images/thumbs/product-img3.png'
                        alt=''
                        className='cover-img'
                      />
                    </Link>
                    <button type='button' className='product-item__wishlist'>
                      <i className='fas fa-heart' />
                    </button>
                  </div>
                  <div className='product-item__content'>
                    <h6 className='product-item__title'>
                      <Link to='/product-details' className='link'>
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className='product-item__info flx-between gap-2'>
                      <span className='product-item__author'>
                        by
                        <Link
                          to='/profile'
                          className='link hover-text-decoration-underline'
                        >
                          themepix
                        </Link>
                      </span>
                      <div className='flx-align gap-2'>
                        <h6 className='product-item__price mb-0'>$79</h6>
                        <span className='product-item__prevPrice text-decoration-line-through'>
                          $99
                        </span>
                      </div>
                    </div>
                    <div className='product-item__bottom flx-between gap-2'>
                      <div>
                        <span className='product-item__sales font-14 mb-2'>
                          900 Sales
                        </span>
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
                          <span className='star-rating__text text-heading fw-500 font-14'>
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to='/product-details'
                        className='btn btn-outline-light btn-sm pill'
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='product-item'>
                  <div className='product-item__thumb d-flex'>
                    <Link to='/product-details' className='link w-100'>
                      <img
                        src='assets/images/thumbs/product-img4.png'
                        alt=''
                        className='cover-img'
                      />
                    </Link>
                    <button type='button' className='product-item__wishlist'>
                      <i className='fas fa-heart' />
                    </button>
                  </div>
                  <div className='product-item__content'>
                    <h6 className='product-item__title'>
                      <Link to='/product-details' className='link'>
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className='product-item__info flx-between gap-2'>
                      <span className='product-item__author'>
                        by
                        <Link
                          to='/profile'
                          className='link hover-text-decoration-underline'
                        >
                          themepix
                        </Link>
                      </span>
                      <div className='flx-align gap-2'>
                        <h6 className='product-item__price mb-0'>$59</h6>
                        <span className='product-item__prevPrice text-decoration-line-through'>
                          $129
                        </span>
                      </div>
                    </div>
                    <div className='product-item__bottom flx-between gap-2'>
                      <div>
                        <span className='product-item__sales font-14 mb-2'>
                          1225 Sales
                        </span>
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
                          <span className='star-rating__text text-heading fw-500 font-14'>
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to='/product-details'
                        className='btn btn-outline-light btn-sm pill'
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='product-item'>
                  <div className='product-item__thumb d-flex'>
                    <Link to='/product-details' className='link w-100'>
                      <img
                        src='assets/images/thumbs/product-img5.png'
                        alt=''
                        className='cover-img'
                      />
                    </Link>
                    <button type='button' className='product-item__wishlist'>
                      <i className='fas fa-heart' />
                    </button>
                  </div>
                  <div className='product-item__content'>
                    <h6 className='product-item__title'>
                      <Link to='/product-details' className='link'>
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className='product-item__info flx-between gap-2'>
                      <span className='product-item__author'>
                        by
                        <Link
                          to='/profile'
                          className='link hover-text-decoration-underline'
                        >
                          themepix
                        </Link>
                      </span>
                      <div className='flx-align gap-2'>
                        <h6 className='product-item__price mb-0'>$99</h6>
                        <span className='product-item__prevPrice text-decoration-line-through'>
                          $129
                        </span>
                      </div>
                    </div>
                    <div className='product-item__bottom flx-between gap-2'>
                      <div>
                        <span className='product-item__sales font-14 mb-2'>
                          1300 Sales
                        </span>
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
                          <span className='star-rating__text text-heading fw-500 font-14'>
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to='/product-details'
                        className='btn btn-outline-light btn-sm pill'
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='product-item'>
                  <div className='product-item__thumb d-flex'>
                    <Link to='/product-details' className='link w-100'>
                      <img
                        src='assets/images/thumbs/product-img6.png'
                        alt=''
                        className='cover-img'
                      />
                    </Link>
                    <button type='button' className='product-item__wishlist'>
                      <i className='fas fa-heart' />
                    </button>
                  </div>
                  <div className='product-item__content'>
                    <h6 className='product-item__title'>
                      <Link to='/product-details' className='link'>
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className='product-item__info flx-between gap-2'>
                      <span className='product-item__author'>
                        by
                        <Link
                          to='/profile'
                          className='link hover-text-decoration-underline'
                        >
                          themepix
                        </Link>
                      </span>
                      <div className='flx-align gap-2'>
                        <h6 className='product-item__price mb-0'>$129</h6>
                        <span className='product-item__prevPrice text-decoration-line-through'>
                          $256
                        </span>
                      </div>
                    </div>
                    <div className='product-item__bottom flx-between gap-2'>
                      <div>
                        <span className='product-item__sales font-14 mb-2'>
                          200 Sales
                        </span>
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
                          <span className='star-rating__text text-heading fw-500 font-14'>
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to='/product-details'
                        className='btn btn-outline-light btn-sm pill'
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='product-item'>
                  <div className='product-item__thumb d-flex'>
                    <Link to='/product-details' className='link w-100'>
                      <img
                        src='assets/images/thumbs/product-img7.png'
                        alt=''
                        className='cover-img'
                      />
                    </Link>
                    <button type='button' className='product-item__wishlist'>
                      <i className='fas fa-heart' />
                    </button>
                  </div>
                  <div className='product-item__content'>
                    <h6 className='product-item__title'>
                      <Link to='/product-details' className='link'>
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className='product-item__info flx-between gap-2'>
                      <span className='product-item__author'>
                        by
                        <Link
                          to='/profile'
                          className='link hover-text-decoration-underline'
                        >
                          themepix
                        </Link>
                      </span>
                      <div className='flx-align gap-2'>
                        <h6 className='product-item__price mb-0'>$129</h6>
                        <span className='product-item__prevPrice text-decoration-line-through'>
                          $259
                        </span>
                      </div>
                    </div>
                    <div className='product-item__bottom flx-between gap-2'>
                      <div>
                        <span className='product-item__sales font-14 mb-2'>
                          500 Sales
                        </span>
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
                          <span className='star-rating__text text-heading fw-500 font-14'>
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to='/product-details'
                        className='btn btn-outline-light btn-sm pill'
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-lg-4 col-sm-6'>
                <div className='product-item'>
                  <div className='product-item__thumb d-flex'>
                    <Link to='/product-details' className='link w-100'>
                      <img
                        src='assets/images/thumbs/product-img8.png'
                        alt=''
                        className='cover-img'
                      />
                    </Link>
                    <button type='button' className='product-item__wishlist'>
                      <i className='fas fa-heart' />
                    </button>
                  </div>
                  <div className='product-item__content'>
                    <h6 className='product-item__title'>
                      <Link to='/product-details' className='link'>
                        SaaS dashboard digital products Title here
                      </Link>
                    </h6>
                    <div className='product-item__info flx-between gap-2'>
                      <span className='product-item__author'>
                        by
                        <Link
                          to='/profile'
                          className='link hover-text-decoration-underline'
                        >
                          themepix
                        </Link>
                      </span>
                      <div className='flx-align gap-2'>
                        <h6 className='product-item__price mb-0'>$79</h6>
                        <span className='product-item__prevPrice text-decoration-line-through'>
                          $99
                        </span>
                      </div>
                    </div>
                    <div className='product-item__bottom flx-between gap-2'>
                      <div>
                        <span className='product-item__sales font-14 mb-2'>
                          2100 Sales
                        </span>
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
                          <span className='star-rating__text text-heading fw-500 font-14'>
                            (16)
                          </span>
                        </div>
                      </div>
                      <Link
                        to='/product-details'
                        className='btn btn-outline-light btn-sm pill'
                      >
                        Live Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center mt-64'>
          <Link to='/all-product' className='btn btn-main btn-lg pill fw-300'>
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArrivalOne;
