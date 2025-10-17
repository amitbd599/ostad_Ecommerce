const reviewModel = require("../models/reviewModel");

//! Review create
exports.createReview = async (req, res) => {
  try {
    let user_id = req.headers.user_id;

    console.log(user_id);

    const { product_id, invoice_id, des, rating } = req.body;

    let data = await reviewModel.create({
      user_id,
      product_id,
      invoice_id,
      des,
      rating,
    });
    res.status(200).json({
      success: true,
      message: "Review created successfully",
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

//! Review Get All with Pagination
exports.allReview = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);
    let per_page = Number(req.params.per_page);

    let skipRow = (page_no - 1) * per_page;

    let sortStage = { createdAt: -1 };
    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        data: [
          { $sort: sortStage },
          { $skip: skipRow },
          { $limit: per_page },
          {
            $project: {
              updatedAt: 0,
            },
          },
        ],
      },
    };

    let data = await reviewModel.aggregate([facetStage]);

    res.status(200).json({
      success: true,
      message: "Review fetched successfully",
      data: data[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Review Get Single
exports.singleReview = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await reviewModel.findById(id);
    res.status(200).json({
      success: true,
      message: "Review fetched successfully",
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

//! Review update single
exports.updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { review_name, review_img } = req.body;

    let data = await reviewModel.findByIdAndUpdate(
      id,
      {
        review_name,
        review_img,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Review updated successfully",
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

//! Review delete single
exports.deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await reviewModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};
