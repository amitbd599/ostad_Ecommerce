import { useState } from "react";
import FileManagerPopup from "./FileManagerPopup";

const CreateProduct = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      name: "Image 1",
      url: "https://img.freepik.com/free-vector/isometric-mobile-phone-background-template_52683-7075.jpg?t=st=1759498647~exp=1759502247~hmac=57a4712b22c5a4a169b6590fad079602fd961fc6c0daf95384fa6c7d578cf961&w=1480",
    },
    { id: 2, name: "Image 2", url: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Image 3", url: "https://via.placeholder.com/300x200" },
    { id: 4, name: "Image 4", url: "https://via.placeholder.com/300x200" },
  ]);

  // Remove image by ID
  const handleDelete = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };
  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo  overflow-hidden'>
        <div className='avatar-upload p-5 mb-5'>
          <h2>Supper Admin</h2>
          <h5>Create Product</h5>
        </div>
      </div>
      {/* Cover Photo End */}
      <div className='dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100 pt-2'>
        {/* Profile Content Start */}
        <div className='profile'>
          <div className='row gy-4'>
            <div className='col-12'>
              <div className='dashboard-card'>
                <div className='profile-info-content'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div className='tab-pane fade show active'>
                      <div>
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
                            {/* <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Image
                            </label>
                            <textarea
                              name=''
                              id=''
                              className='common-input border'
                            ></textarea> */}

                            <button
                              className='btn btn-main btn-sm pill'
                              data-bs-toggle='modal'
                              data-bs-target={`#exampleModal_${1}`}
                            >
                              Select Image
                            </button>

                            <div className='common-input border mt-3 p-3'>
                              <div className=' my-4'>
                                <h4 className='mb-3'>Image Gallery</h4>
                                <div className='row g-3'>
                                  {images.map((img) => (
                                    <div className='col-2' key={img.id}>
                                      <div className='card shadow-sm position-relative'>
                                        {/* Delete button */}
                                        <button
                                          className='btn btn-sm btn-danger position-absolute top-0 end-0 m-1 rounded-circle'
                                          onClick={() => handleDelete(img.id)}
                                        >
                                          &times;
                                        </button>

                                        {/* Image */}
                                        <img
                                          src={img.url}
                                          alt={img.name}
                                          className='card-img-top'
                                          style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                          }}
                                        />

                                        {/* Card body */}
                                        <div className='card-body p-2 text-center'>
                                          <p className='small text-truncate mb-0'>
                                            {img.name}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}

                                  {images.length === 0 && (
                                    <p className='text-muted text-center'>
                                      No images available.
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className='col-sm-12 text-end'>
                            <button className='btn btn-main btn-lg pill mt-4'>
                              {" "}
                              Create Product
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Content End */}
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
                        <FileManagerPopup />
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

export default CreateProduct;
