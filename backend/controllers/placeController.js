const Place = require("../models/Place");

const getPlacesByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const places = await Place.find({ category });
    res.status(200).json(places);
  } 
  catch (err) {
    res.status(500).json({
      message: "Something Went Wrong...",
      error:err.message
    });
  }
};

module.exports = {
  getPlacesByCategory,
};