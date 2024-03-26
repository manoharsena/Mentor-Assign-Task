import Student from "../Models/student.schema.js";

export const createStudent = async (req, res) => {
  try {
    const students = new Student(req.body);
    await students.save();
    res.status(201).json({
      message: "Student enrolled Successfully",
      data: students,
    });
  } catch (error) {
    res.status(500).json({ error: "Error in enroll a student" });
  }
};

export const getAllStudent = async (req, res) => {
  try {
    const data = await Student.find();
    res.status(200).json({
      message: "Students details fetched successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Fetching the data",
    });
  }
};

export const getStudentAssigned = async (req, res) => {
  try {
    const studentId = req.params.id;
    const { mentorId } = req.body;
    const student = await Student.findByIdAndUpdate(
      studentId,
      { mentorId: mentorId },
      { new: true }
    );
    res.status(200).json({
      message: "Assigned the Mentor Succesfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error Assigning the Mentors",
    });
  }
};

export const getStudentAssignedMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).populate("mentorId");
    res.status(200).json({
      message: "Details fetched succesfully",
      Mentor: student.mentorId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error Fetching the Mentors",
    });
  }
};
