import express from "express";
import {
  createMentor,
  getAllMentor,
  getMentorAssigned,
  getStudentListMentor,
} from "../Controllers/mentor.controller.js";

const router = express.Router();

router.post("/addmentor", createMentor);
router.get("/allmentors", getAllMentor);
router.put("/assign/:id", getMentorAssigned);
router.get("/mentor-student/:id", getStudentListMentor);

export default router;
