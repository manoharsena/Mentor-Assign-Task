import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import MentorRouter from "./Routers/mentor.router.js";
import StudentRouter from "./Routers/student.router.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

connectDB();

app.use("/api/mentor", MentorRouter);
app.use("/api/student", StudentRouter);

app.get("/", (req, res) => {
  res.status(200)
    .send(`<div style="text-align: center; background-color:lightblue;  padding: 10px;"><h1>Assign a mentors to the students</h1></div>
      <div>
      <h1  style="text-align: center;"> <u>Base API For Mentor:</u> https://mentor-assign-task-61pa.onrender.com/api/mentor</h1>
      <h2>End Points</h2>
      <ul>
      <li>
      <h3><mark>Post:</mark> End point to add a new mentor - <mark>/addmentor</mark></h3>
      </li>
  
      <li>
      <h3><mark>Get:</mark> End point to fetch all mentor details - <mark>/allmentors</mark></h3>
      </li>
  
      <li>
      <h3><mark>Put:</mark> End point to assign a mentor to the student - <mark>/assign/:id</mark></h3>
      </li>
  
      <li>
      <h3><mark>Get:</mark> End point to fetch the student list of a mentor - <mark>/mentor-student/:id</mark></h3>
      </li>
  
      </ul> 
      </div>
      <hr></hr>
       
      <div>
      <h1  style="text-align: center;"> <u>Base API For Student:</u> https://mentor-assign-task-61pa.onrender.com/api/student</h1>
      <h2>End Points</h2>
      <ul>
      <li>
      <h3><mark>Post:</mark> End point to add a new student - <mark>/enrollStudent</mark></h3>
      </li>
  
      <li>
      <h3><mark>Get:</mark> End point to fetch all the students - <mark>/allstudents</mark></h3>
      </li>
  
      <li>
      <h3><mark>Put:</mark> End point to assign a student to the mentor - <mark>/assign/:id</mark></h3>
      </li>
  
      <li>
      <h3><mark>Get:</mark> End point to get a particular mentor assigned to the student - <mark>/get-particular/:id</mark></h3>
      </li>
  
      </ul> 
      </div>`);
});

app.listen(port, () => {
    console.log('App is listing to the port -',port);
})
