const express = require("express");
const router = express.Router();

// @route Get api/posts/test
// @desc Tests posts route
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
