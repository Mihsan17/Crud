const express = require("express");
const router = express.Router();
const studentControllers = require("../controllers/studentsController");

//view All Records
router.get("/",studentControllers.view);

//Add New Records
router.get("/adduser",studentControllers.adduser);
router.post("/adduser",studentControllers.save);

//update Record
router.get("/edituser/:id",studentControllers.edituser);
router.post("/edituser/:id",studentControllers.edit);

//Delete Record
router.get("/deleteuser/:id",studentControllers.delete);

module.exports = router;
