const express = require("express");

const {
  createCandidate,
  getCandidates,
  getCandidateById,
  updateCandidate,
  deleteCandidate,
} = require("../controllers/candidateController");

const router = express.Router();

// Create & Get All
router.route("/")
  .post(createCandidate)
  .get(getCandidates);

// Get, Update & Delete by ID
router.route("/:id")
  .get(getCandidateById)
  .put(updateCandidate)
  .delete(deleteCandidate);

module.exports = router;