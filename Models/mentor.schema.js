import mongoose from "mongoose";

const MentorSchema = mongoose.Schema({
  name: String,
  course: String,
  email: String,
  studentId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

const Mentor = mongoose.model("Mentors", MentorSchema);
export default Mentor;
