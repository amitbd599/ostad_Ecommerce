import { useState } from "react";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [activeButton, setActiveButton] = useState("grid-view");
  const [filter, setFilter] = useState(false);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <section
      className={`all-product padding-y-120 ${
        activeButton === "list-view" ? "list-view" : ""
      }`}
    >
      <div className='container container-two'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='filter-tab gap-3 flx-between'>
              <button
                type='button'
                className='filter-tab__button btn btn-outline-light pill d-flex align-items-center'
              >
                <span className='icon icon-left'>
                  <img src='assets/images/icons/filter.svg' alt='' />
                </span>
                <span className='font-18 fw-500'>Filters</span>
              </button>

              <div className='list-grid d-flex align-items-center gap-2'>
                <button
                  className={`list-grid__button list-button d-sm-flex d-none text-body ${
                    activeButton === "list-view" ? "active" : ""
                  }`}
                  onClick={() => handleClick("list-view")}
                >
                  <i className='las la-list' />
                </button>
                <button
                  className={`list-grid__button grid-button d-sm-flex d-none  text-body ${
                    activeButton === "grid-view" ? "active" : ""
                  }`}
                  onClick={() => handleClick("grid-view")}
                >
                  <i className='las la-border-all' />
                </button>
                <button
                  className='list-grid__button sidebar-btn text-body d-lg-none d-flex'
                  onClick={handleFilter}
                >
                  <i className='las la-bars' />
                </button>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4'>
            {/* ===================== Filter Sidebar Start ============================= */}
            <div className={`filter-sidebar ${filter && "show"}`}>
              <button
                type='button'
                className='filter-sidebar__close p-2 position-absolute end-0 top-0 z-index-1 text-body hover-text-main font-20 d-lg-none d-block'
                onClick={handleFilter}
              >
                <i className='las la-times' />
              </button>

              {/* sidebar item */}
              <div className='filter-sidebar__item'>
                <div>
                  <button
                    type='button'
                    className='filter-sidebar__button font-16 text-capitalize fw-500'
                  >
                    Category
                  </button>
                  <div className='filter-sidebar__content'>
                    <ul className='filter-sidebar-list'>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          All Categories <span className='qty'>25489</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Site Template <span className='qty'>12,501</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          WordPress <span className='qty'>1258</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          UI Template <span className='qty'>1520</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Templates Kits <span className='qty'>210</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          eCommerce <span className='qty'>158</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Marketing <span className='qty'>178</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          CMS Template <span className='qty'>122</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Muse Themes <span className='qty'>450</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Blogging <span className='qty'>155</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Courses <span className='qty'>125</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Forums <span className='qty'>35</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='mt-5'>
                  <button
                    type='button'
                    className='filter-sidebar__button font-16 text-capitalize fw-500'
                  >
                    Category
                  </button>
                  <div className='filter-sidebar__content'>
                    <ul className='filter-sidebar-list'>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          All Categories <span className='qty'>25489</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Site Template <span className='qty'>12,501</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          WordPress <span className='qty'>1258</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          UI Template <span className='qty'>1520</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Templates Kits <span className='qty'>210</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          eCommerce <span className='qty'>158</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Marketing <span className='qty'>178</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          CMS Template <span className='qty'>122</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Muse Themes <span className='qty'>450</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Blogging <span className='qty'>155</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Courses <span className='qty'>125</span>
                        </Link>
                      </li>
                      <li className='filter-sidebar-list__item'>
                        <Link to='/' className='filter-sidebar-list__text'>
                          Forums <span className='qty'>35</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* ===================== Filter Sidebar End ============================= */}
          </div>
          <div className='col-xl-9 col-lg-8'>
            <div className='tab-content'>
              <div
                className='tab-pane fade show active'
                id='pills-product'
                role='tabpanel'
                aria-labelledby='pills-product-tab'
                tabIndex={0}
              >
                <div className='row gy-4 list-grid-wrapper'>
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img1.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img2.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img3.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img4.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img5.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img6.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img7.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img8.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img9.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img10.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img11.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                  <div className='col-xl-4 col-sm-6'>
                    <div className='product-item section-bg'>
                      <div className='product-item__thumb d-flex'>
                        <Link to='/product-details' className='link w-100'>
                          <img
                            src='assets/images/thumbs/product-img12.png'
                            alt=''
                            className='cover-img'
                          />
                        </Link>
                        <button
                          type='button'
                          className='product-item__wishlist'
                        >
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
                {/* Pagination Start */}
                <nav aria-label='Page navigation example'>
                  <ul className='pagination common-pagination'>
                    <li className='page-item'>
                      <Link className='page-link' to='#'>
                        1
                      </Link>
                    </li>
                    <li className='page-item'>
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
                      <Link className='page-link' to='#'>
                        5
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
                {/* Pagination End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
