import express from "express";
import {
  createStudent,
  getAllStudent,
  getStudentAssigned,
  getStudentAssignedMentor,
} from "../Controllers/student.controller.js";

const router = express.Router();

router.post("/enrollstudent", createStudent);
router.get("/allstudents", getAllStudent);
router.put("/assign/:id", getStudentAssigned);
router.get("/get-particular/:id", getStudentAssignedMentor);

export default router;
