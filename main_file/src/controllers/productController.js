const productModel = require("../models/productModel");

//! Product create
exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      images,
      sort_description,
      price,
      is_discount,
      discount_price,
      remark,
      stock,
      color,
      size,
      description,
      category_id,
      brand_id,
    } = req.body;

    let data = await productModel.create({
      title,
      images,
      sort_description,
      price,
      is_discount,
      discount_price,
      remark,
      stock,
      color,
      size,
      description,
      category_id,
      brand_id,
    });
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Product Get All with Pagination
exports.allProduct = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);
    let per_page = Number(req.params.per_page);

    let skipRow = (page_no - 1) * per_page;

    let sortStage = { createdAt: -1 };
    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        products: [
          { $sort: sortStage },
          { $skip: skipRow },
          { $limit: per_page },
          {
            $project: {
              _id: 1,
              title: 1,
              images: 1,
              price: 1,
              is_discount: 1,
              discount_price: 1,
              remark: 1,
              stock: 1,
              createdAt: 1,
            },
          },
        ],
      },
    };

    let products = await productModel.aggregate([facetStage]);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Product Get Single
exports.singleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await productModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Product update single
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, img, link, category } = req.body;

    let data = await productModel.findByIdAndUpdate(
      id,
      { title, img, link, category },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Product delete single
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await productModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
