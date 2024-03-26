import Mentor from "../Models/mentor.schema.js";
import Student from "../Models/student.schema.js";

export const createMentor = async (req, res) => {
  try {
    const mentors = new Mentor(req.body);
    await mentors.save();
    res.status(201).json({
      message: "Mentor added Successfully",
      data: mentors,
    });
  } catch (error) {
    res.status(500).json({ error: "Adding a new mentor failed" });
  }
};

export const getAllMentor = async (req, res) => {
  try {
    const data = await Mentor.find();
    res.status(200).json({
      message: "Mentor details fetched successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Fetching the data",
    });
  }
};

export const getMentorAssigned = async (req, res) => {
  try {
    const mentorId = req.params.id;
    const { studentId } = req.body;
    const mentors = await Mentor.findByIdAndUpdate(
      mentorId,
      { studentId: studentId },
      { new: true }
    );
    res.status(200).json({
      message: "Assigned the sudent succesfully",
      mentors,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Assigning the Students",
    });
  }
};

export const getStudentListMentor = async (req, res) => {
  try {
    const mentorId = req.params.id;
    const students = await Student.find({ mentorId: mentorId });
    res.status(200).json({
      message: "Students details fetched succesfully",
      students,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Fetching the Students",
    });
  }
};
