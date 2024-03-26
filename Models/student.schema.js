import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
  name: String,
  course: String,
  email: String,
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentors",
  },
});

const Student = mongoose.model("Student", StudentSchema);
export default Student;
