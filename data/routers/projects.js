const express = require("express");
const db = require("../helpers/projectModel.js");
const router = express.Router();

//=================================================Create Routers
router.post("/", async (req, res) => {
  try {
    const project = await db.insert(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: "Error adding the project" });
  }
});
//=================================================Read Routers
router.get("/", async (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get projects" });
    });
});
//---------------------------------------By Post ID
router.get("/:id", async (req, res) => {
  try {
    const project = await db.get(req.params.id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error retrieving the project" });
  }
});

//=================================================Update Routers
router.put("/:id", async (req, res) => {
  try {
    const project = await db.update(req.params.id, req.body);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "The project could not be found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error updating the project" });
  }
});
//=================================================Delete Routers
router.delete("/:id", async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      res.status(200).json({ message: "The project has been nuked" });
    } else {
      res.status(404).json({ message: "The project could not be found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error removing the project" });
  }
});

module.exports = router;
