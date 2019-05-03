const express = require("express");
const db = require("../helpers/actionModel.js");
const IdChecker = require("./middleware.js");
const router = express.Router();

//=================================================Post Routers
router.post("/", IdChecker, async (req, res) => {
  try {
    const action = await db.insert(req.body);
    res.status(201).json(action);
  } catch (err) {
    res.status(500).json({ message: "Error adding the action" });
  }
});
//=================================================Get Routers
router.get("/", async (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get actions" });
    });
});
//---------------------------------------By ID
router.get("/:id", async (req, res) => {
  try {
    const action = await db.get(req.params.id);

    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "Action not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error retrieving the action" });
  }
});

//=================================================Update Routers
router.put("/:id", async (req, res) => {
  try {
    const action = await db.update(req.params.id, req.body);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "The action could not be found" });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error updating the action"
    });
  }
});
//=================================================Delete Routers
router.delete("/:id", async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The action has been nuked" });
    } else {
      res.status(404).json({ message: "The action could not be found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error removing the action" });
  }
});

module.exports = router;
