const categoryModel = require("../models/CategoryModel");

//! Category create
exports.createCategory = async (req, res) => {
  try {
    const { category_name, category_img } = req.body;

    let data = await categoryModel.create({
      category_name,
      category_img,
    });
    res.status(200).json({
      success: true,
      message: "Category created successfully",
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

//! Category Get All with Pagination
exports.allCategory = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);
    let per_page = Number(req.params.per_page);

    let skipRow = (page_no - 1) * per_page;

    let sortStage = { createdAt: -1 };
    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        Categorys: [
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

    let Categorys = await categoryModel.aggregate([facetStage]);

    res.status(200).json({
      success: true,
      message: "Categorys fetched successfully",
      data: Categorys[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Category Get Single
exports.singleCategory = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await categoryModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Category fetched successfully",
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

//! Category update single
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
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

    let data = await categoryModel.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
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

//! Category delete single
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await categoryModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
