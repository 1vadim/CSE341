const mongodb = require("../db/connect");

const getData = async (req, res, next) => {
  try {
    const result = await mongodb.getDb().db("week01").collection("user").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]); 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getData };
