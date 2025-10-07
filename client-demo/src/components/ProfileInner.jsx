const ProfileInner = () => {
  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo position-relative z-index-1 overflow-hidden'></div>
      {/* Cover Photo End */}
      {/* Cover Photo End */}
      <div className='dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--150'>
        {/* Profile Content Start */}
        <div className='profile'>
          <div className='row gy-4'>
            <div className='col-xxl-3 col-xl-4'>
              <div className='profile-info'>
                <div className='profile-info__inner mb-40 text-center'>
                  <h5 className='profile-info__name mb-1'>Michel Smith</h5>
                  <span className='profile-info__designation font-14'>
                    Exclusive Author
                  </span>
                </div>
                <ul className='profile-info-list'>
                  <li className='profile-info-list__item'>
                    <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                      <img
                        src='assets/images/icons/profile-info-icon1.svg'
                        alt=''
                        className='icon'
                      />
                      <span className='text text-heading fw-500'>Username</span>
                    </span>
                    <span className='profile-info-list__info'>michel15</span>
                  </li>
                  <li className='profile-info-list__item'>
                    <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                      <img
                        src='assets/images/icons/profile-info-icon2.svg'
                        alt=''
                        className='icon'
                      />
                      <span className='text text-heading fw-500'>Email</span>
                    </span>
                    <span className='profile-info-list__info'>
                      michel15@gmail.com
                    </span>
                  </li>
                  <li className='profile-info-list__item'>
                    <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                      <img
                        src='assets/images/icons/profile-info-icon3.svg'
                        alt=''
                        className='icon'
                      />
                      <span className='text text-heading fw-500'>Phone</span>
                    </span>
                    <span className='profile-info-list__info'>
                      +880 15589 236 45
                    </span>
                  </li>
                  <li className='profile-info-list__item'>
                    <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                      <img
                        src='assets/images/icons/profile-info-icon4.svg'
                        alt=''
                        className='icon'
                      />
                      <span className='text text-heading fw-500'>Country</span>
                    </span>
                    <span className='profile-info-list__info'>Bangladesh</span>
                  </li>

                  <li className='profile-info-list__item'>
                    <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                      <img
                        src='assets/images/icons/profile-info-icon6.svg'
                        alt=''
                        className='icon'
                      />
                      <span className='text text-heading fw-500'>
                        Member Since
                      </span>
                    </span>
                    <span className='profile-info-list__info'>
                      Jan, 01, 2024
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xxl-9 col-xl-8'>
              <div className='dashboard-card'>
                <div className='dashboard-card__header pb-0'>
                  <ul
                    className='nav tab-bordered nav-pills'
                    id='pills-tab'
                    role='tablist'
                  >
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link font-18 font-heading active'
                        id='pills-personalInfo-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-personalInfo'
                        type='button'
                        role='tab'
                        aria-controls='pills-personalInfo'
                        aria-selected='true'
                      >
                        Personal Info
                      </button>
                    </li>

                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link font-18 font-heading'
                        id='pills-changePassword-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-changePassword'
                        type='button'
                        role='tab'
                        aria-controls='pills-changePassword'
                        aria-selected='false'
                      >
                        Change Password
                      </button>
                    </li>
                  </ul>
                </div>
                <div className='profile-info-content'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div
                      className='tab-pane fade show active'
                      id='pills-personalInfo'
                      role='tabpanel'
                      aria-labelledby='pills-personalInfo-tab'
                      tabIndex={0}
                    >
                      <form action='#' autoComplete='off'>
                        <div className='row gy-4'>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              First Name
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='First Name'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Last Name
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Last Name'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Phone Number
                            </label>
                            <input
                              type='tel'
                              className='common-input border'
                              placeholder='Phone Number'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Email
                            </label>
                            <input
                              type='email'
                              className='common-input border'
                              placeholder='Email Address'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Address
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder=' Address'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              City
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='City'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Country
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Country'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Fax
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Fax'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Postcode
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Postcode'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              State
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='State'
                            />
                          </div>

                          <div className='col-sm-6 col-xs-6 pt-3'>
                            <label className='form-label font-18 font-heading fw-600'>
                              Shipping Details:
                            </label>
                          </div>
                          <hr />

                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Shipping Name
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Shipping Name'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Shipping Phone
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Shipping Phone'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Shipping Address
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Shipping Address'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Shipping City
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Shipping City'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Shipping Country
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Shipping Country'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Shipping Postcode
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Shipping Postcode'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Shipping State
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              placeholder='Shipping State'
                            />
                          </div>

                          <div className='col-sm-12 text-end'>
                            <button className='btn btn-main btn-lg pill mt-4'>
                              {" "}
                              Update Profile
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div
                      className='tab-pane fade'
                      id='pills-changePassword'
                      role='tabpanel'
                      aria-labelledby='pills-changePassword-tab'
                      tabIndex={0}
                    >
                      <form action='#' autoComplete='off'>
                        <div className='row gy-4'>
                          <div className='col-12'>
                            <label
                              htmlFor='current-password'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              Current Password
                            </label>
                            <div className='position-relative'>
                              <input
                                type='password'
                                className='common-input common-input--withIcon common-input--withLeftIcon '
                                id='current-password'
                                placeholder='************'
                              />
                              <span className='input-icon input-icon--left'>
                                <img
                                  src='assets/images/icons/key-icon.svg'
                                  alt=''
                                />
                              </span>
                              <span
                                className='input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two'
                                id='#current-password'
                              />
                            </div>
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='new-password'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              New Password
                            </label>
                            <div className='position-relative'>
                              <input
                                type='password'
                                className='common-input common-input--withIcon common-input--withLeftIcon '
                                id='new-password'
                                placeholder='************'
                              />
                              <span className='input-icon input-icon--left'>
                                <img
                                  src='assets/images/icons/lock-two.svg'
                                  alt=''
                                />
                              </span>
                              <span
                                className='input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two'
                                id='#new-password'
                              />
                            </div>
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='confirm-password'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              Current Password
                            </label>
                            <div className='position-relative'>
                              <input
                                type='password'
                                className='common-input common-input--withIcon common-input--withLeftIcon '
                                id='confirm-password'
                                placeholder='************'
                              />
                              <span className='input-icon input-icon--left'>
                                <img
                                  src='assets/images/icons/lock-two.svg'
                                  alt=''
                                />
                              </span>
                              <span
                                className='input-icon password-show-hide fas fa-eye la-eye-slash toggle-password-two'
                                id='#confirm-password'
                              />
                            </div>
                          </div>
                          <div className='col-sm-12 text-end'>
                            <button className='btn btn-main btn-lg pill mt-4'>
                              {" "}
                              Update Password
                            </button>
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
        {/* Profile Content End */}
      </div>
    </>
  );
};

export default ProfileInner;
