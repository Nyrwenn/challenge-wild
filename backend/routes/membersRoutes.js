const express = require("express");
const router = express.Router();
const memberCtrl = require("../controllers/memberControllers");

router.post("/", memberCtrl.createMember);
router.get("/allMembers", memberCtrl.getAllMembers);

module.exports = router;
