const mongoose = require("mongoose");
const reviewModel = require("../models/reviewModel");

const ObjectId = mongoose.Types.ObjectId;
//! Review create
exports.createReview = async (req, res) => {
  try {
    let user_id = req.headers._id;
    const { product_id, invoice_id, des, rating } = req.body;

    let data = await reviewModel.updateOne(
      { user_id, product_id, invoice_id },
      { user_id, product_id, invoice_id, des, rating },
      { new: true, upsert: true }
    );

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

//!  Get All Review with Pagination
exports.allReview = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);
    let per_page = Number(req.params.per_page);

    let skipRow = (page_no - 1) * per_page;
    let sortStage = { createdAt: -1 };
    let joinStageWithUser = {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    };

    let joinStageWithProduct = {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product",
      },
    };

    let unwindStageUser = { $unwind: "$user" };
    let unwindStageProduct = { $unwind: "$product" };

    let projectStage = {
      $project: {
        _id: 1,
        invoice_id: 1,
        product_id: 1,
        user_id: 1,
        createdAt: 1,
        des: 1,
        rating: 1,
        "user.cus_name": 1,
        "user.email": 1,
        "product.title": 1,
        "product.images": 1,
      },
    };

    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        data: [
          { $sort: sortStage },
          { $skip: skipRow },
          { $limit: per_page },
          joinStageWithUser,
          joinStageWithProduct,
          unwindStageUser,
          unwindStageProduct,
          projectStage,
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

//!  Get Review by single product
exports.allReviewByProducts = async (req, res) => {
  try {
    let product_id = new ObjectId(req.params.product_id);

    let matchingStage = {
      $match: {
        product_id,
      },
    };

    let joinWithUser = {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    };

    let unwindUseStage = { $unwind: "$user" };
    let project = {
      $project: {
        createdAt: 1,
        updatedAt: 1,
        des: 1,
        rating: 1,
        "user.cus_name": 1,
        "user.email": 1,
      },
    };

    let data = await reviewModel.aggregate([
      matchingStage,
      joinWithUser,
      unwindUseStage,
      project,
    ]);

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
