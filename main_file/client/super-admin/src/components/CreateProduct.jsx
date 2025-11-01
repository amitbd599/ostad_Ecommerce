import { useState } from "react";
import FileManagerPopup from "./FileManagerPopup";
import productStore from "../store/productStore";

const CreateProduct = () => {
  let { createProductRequest } = productStore();
  let [data, setData] = useState({
    title: "",
    images: [],
    sort_description: "",
    price: "",
    is_discount: true,
    discount_price: 0,
    remark: "",
    stock: 0,
    color: [],
    size: [],
    description: "",
    category_id: "",
    brand_id: "",
  });

  console.log(data);

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
                              onChange={(e) =>
                                setData({ ...data, title: e.target.value })
                              }
                              type='text'
                              className='common-input border'
                            />
                          </div>
                          <div className='col-sm-6 col-xs-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Short Description
                            </label>
                            <input
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  sort_description: e.target.value,
                                })
                              }
                              type='text'
                              className='common-input border'
                            />
                          </div>
                          <div className='col-12'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Image (Use comma for multi images. Ex:
                              image_1.png, image_2.jpg, image_3.png)
                            </label>
                            <textarea
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  images: [e.target.value],
                                })
                              }
                              name=''
                              id=''
                              className='common-input border'
                            ></textarea>
                          </div>
                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Price
                            </label>
                            <input
                              onChange={(e) =>
                                setData({ ...data, price: e.target.value })
                              }
                              type='number'
                              className='common-input border'
                            />
                          </div>
                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Is Discount?
                            </label>
                            <div className='select-has-icon'>
                              <select
                                className='common-input border'
                                // value={data?.is_discount}
                                onChange={(e) =>
                                  setData({
                                    ...data,
                                    is_discount: e.target.value === "true",
                                  })
                                }
                              >
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
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  discount_price: e.target.value,
                                })
                              }
                              type='number'
                              className='common-input border'
                            />
                          </div>

                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Category
                            </label>
                            <div className='select-has-icon'>
                              <select
                                className='common-input border'
                                value={data?.category_id}
                                onChange={(e) =>
                                  setData({
                                    ...data,
                                    category_id: e.target.value,
                                  })
                                }
                              >
                                <option value={"455sd5sdd5sdd5sd"}>
                                  455sd5sdd5sdd5sd
                                </option>
                                <option value={"sdfsdfdsfdsf"}>
                                  455sd5sdd5sdd5sd
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Brand
                            </label>
                            <div className='select-has-icon'>
                              <select
                                className='common-input border'
                                onChange={(e) =>
                                  setData({
                                    ...data,
                                    brand_id: e.target.value,
                                  })
                                }
                              >
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                              </select>
                            </div>
                          </div>
                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Remark (Ex: New, Old, Business)
                            </label>
                            <input
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  remark: [e.target.value],
                                })
                              }
                              type='text'
                              className='common-input border'
                            />
                          </div>
                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Stock
                            </label>
                            <input
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  stock: e.target.value,
                                })
                              }
                              type='number'
                              className='common-input border'
                            />
                          </div>
                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Color (Ex: Red, Green, Blue)
                            </label>
                            <input
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  color: [e.target.value],
                                })
                              }
                              type='text'
                              className='common-input border'
                            />
                          </div>

                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Size (Ex: XXL, XL, X)
                            </label>
                            <input
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  size: [e.target.value],
                                })
                              }
                              type='text'
                              className='common-input border'
                            />
                          </div>

                          <div className='col-12'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Description
                            </label>
                            <textarea
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  description: e.target.value,
                                })
                              }
                              name=''
                              id=''
                              className='common-input border'
                            ></textarea>
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
