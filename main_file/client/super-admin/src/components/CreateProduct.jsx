import { useEffect, useState } from "react";
import productStore from "../store/productStore";
import categoryStore from "../store/categoryStore";
import brandStore from "../store/brandStore";
import { ErrorToast, IsEmpty } from "../helper/helper";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  let { createProductRequest } = productStore();
  let { allCategoryRequest, allCategory } = categoryStore();
  let { allBrandRequest, allBrand } = brandStore();

  // all Category
  useEffect(() => {
    (async () => {
      await allCategoryRequest(100, 1);
      await allBrandRequest(100, 1);
    })();
  }, [allCategoryRequest, allBrandRequest]);

  console.log(allBrand);

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

  // Validation rules
  const validations = [
    { field: data.title, message: "Title is required!" },
    { field: data.images, message: "Images is required!" },
    { field: data.sort_description, message: "Sort description is required!" },
    { field: data.price, message: "Price is required!" },
    { field: data.is_discount, message: "Discount is required!" },
    { field: data.discount_price, message: "Discount price is required!" },
    { field: data.remark, message: "Remark is required!" },
    { field: data.stock, message: "Stock is required!" },
    { field: data.color, message: "Color is required!" },
    { field: data.size, message: "Size is required!" },
    { field: data.description, message: "Description is required!" },
    { field: data.category_id, message: "Category is required!" },
    { field: data.brand_id, message: "Brand is required!" },
  ];

  let productSubmit = async () => {
    for (const { field, message } of validations) {
      if (IsEmpty(field)) {
        return ErrorToast(message);
      }
    }
    let res = await createProductRequest(data);
    if (res) {
      navigate("/all-product");
    }
  };

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
                                  images: e.target.value
                                    .split(",")
                                    .map((item) => item.trim()),
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
                                setData({
                                  ...data,
                                  price: Number(e.target.value),
                                })
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
                                  discount_price: Number(e.target.value),
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
                                <option value={""}>
                                  Please Select A Category **
                                </option>
                                {allCategory?.map((item, index) => (
                                  <option key={index} value={item?._id}>
                                    {item?.category_name}
                                  </option>
                                ))}
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
                                <option value={""}>
                                  Please Select A Brand **
                                </option>
                                {allBrand?.map((item, index) => (
                                  <option key={index} value={item?._id}>
                                    {item?.brand_name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className='col-sm-4 col-xs-4'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Remark (Ex: New)
                            </label>
                            <input
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  remark: e.target.value,
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
                                  stock: Number(e.target.value),
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
                                  color: e.target.value
                                    .split(",")
                                    .map((item) => item.trim()),
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
                                  size: e.target.value
                                    .split(",")
                                    .map((item) => item.trim()),
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
                            <button
                              onClick={productSubmit}
                              className='btn btn-main btn-lg pill mt-4'
                            >
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
    </>
  );
};

export default CreateProduct;
