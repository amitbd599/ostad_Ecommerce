const UpdateProduct = () => {
  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo  overflow-hidden'>
        <div className='avatar-upload p-5 mb-5'>
          <h2>Supper Admin</h2>
          <h5>Update Product</h5>
        </div>
      </div>
      {/* Cover Photo End */}
      <div className='dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100 pt-2'>
        {/* Profile Content Start */}
        <div className='profile'>
          <div className='row gy-4'>
            <div className='col-xxl-9 col-xl-8'>
              <div className='dashboard-card'>
                <div className='profile-info-content'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div className='tab-pane fade show active'>
                      <form action='#' autoComplete='off'>
                        <div className='row gy-4'>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='fName'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              First Name
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              id='fName'
                              defaultValue='Michel'
                              placeholder='First Name'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='lastNamee'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              Last Name
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              id='lastNamee'
                              defaultValue='Smith'
                              placeholder='Last Name'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='phonee'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              Phone Number
                            </label>
                            <input
                              type='tel'
                              className='common-input border'
                              id='phonee'
                              defaultValue='+880 15589 236 45'
                              placeholder='Phone Number'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='emailAdddd'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              Email Address
                            </label>
                            <input
                              type='email'
                              className='common-input border'
                              id='emailAdddd'
                              defaultValue='michel15@gmail.com'
                              placeholder='Email Address'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='cityyy'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              City
                            </label>
                            <div className='select-has-icon'>
                              <select
                                className='common-input border'
                                id='cityyy'
                                defaultValue={1}
                              >
                                <option value={1}>Dhaka</option>
                                <option value={1}>Chandpur</option>
                                <option value={1}>Comilla</option>
                                <option value={1}>Rangpur</option>
                              </select>
                            </div>
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='Stateee'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              State/Region
                            </label>
                            <div className='select-has-icon'>
                              <select
                                className='common-input border'
                                id='Stateee'
                                defaultValue={1}
                              >
                                <option value={1}>USA</option>
                                <option value={1}>Bangladesh</option>
                                <option value={1}>India</option>
                                <option value={1}>Pakistan</option>
                              </select>
                            </div>
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='Postcodeee'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              Postcode
                            </label>
                            <input
                              type='text'
                              className='common-input border'
                              id='Postcodeee'
                              defaultValue={1219}
                              placeholder='Post Code'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label
                              htmlFor='Countryyy'
                              className='form-label mb-2 font-18 font-heading fw-600'
                            >
                              Country
                            </label>
                            <div className='select-has-icon'>
                              <select
                                className='common-input border'
                                id='Countryyy'
                                defaultValue={1}
                              >
                                <option value={1}>USA</option>
                                <option value={1}>Bangladesh</option>
                                <option value={1}>India</option>
                                <option value={1}>Pakistan</option>
                              </select>
                            </div>
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

export default UpdateProduct;
