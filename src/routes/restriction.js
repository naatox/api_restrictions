const { Router } = require("express");
const { db } = require("../firebase");
const router = Router();
const {
  getRestrictionsByStudent,
  hasRestrictions,
  assignRestriction,
  removeRestriction,
  getAllRestrictions,
} = require("../controllers/restrictionsController");

router.get("/:studentId", async (req, res) => {
  const { studentId } = req.params;
  return await getRestrictionsByStudent(studentId,res);
  
});

router.get("/validate/:studentId", async (req, res) => {
  const { studentId } = req.params;
  return await hasRestrictions(studentId,res);
});

// admin ?
router.post("/assign", async (req, res) => {
  const { studentId, reason } = req.query;
  return await assignRestriction(studentId, reason,res);
});
 // admin ?
router.delete("/remove/:restrictionId", async (req, res) => {
  return await removeRestriction(restrictionId, res);
});

router.get("/", async (req, res) => {
  return await getAllRestrictions(res);
});

module.exports = router;
