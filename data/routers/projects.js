const express = require("express");
const db = require("../helpers/projectModel.js");
const router = express.Router();

//=========================================================Create Actions
router.post("/", projectIdCheck, async (req, res) => {})

//=========================================================Read Actions
//------------------------------get all
router.get("/", (req, res) => {})

//------------------------------get by ID
router.get("/:id", async (req, res) => {})

//=========================================================Update Actions
router.put("/:id", async (req, res) => {})

//=========================================================Delete Actions
router.delete("/:id", async (req, res) => {})

module.exports = router;