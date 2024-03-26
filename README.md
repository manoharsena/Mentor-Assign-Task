# Mentor-Assign-Task

**Description:**

This repository is for a basic implementation of the mentoring system using Express.js and MongoDB. It provides endpoints for creating, retrieving, and assigning mentors and students.

**Features:**

1. **Mentor Management:**
   - **Add new mentor:** POST request to add a new mentor.
   - **All mentors details:** GET request to retrieve all mentors details.
   - **Assign Students to Mentor:** PUT request to assign students to a mentor.
   - **Get Students of a Mentor:** GET request to retrieve all students assigned to a particular mentor.

2. **Student Management:**
   - **Add new student:** POST request to add a new student.
   - **All students details:** GET request to retrieve all students.
   - **Assign Mentor to Student:** PUT request to assign a mentor to a student.
   - **Get Mentor of a Student:** GET request to retrieve the mentor of a particular student.

**Project Structure:**

- **Database:**
  - **dbConfig.js:** Establishes connection to MongoDB using Mongoose.
- **Routers:**
  - **mentor.router.js:** Defines routes related to mentor operations.
  - **student.router.js:** Defines routes related to student operations.
- **Controllers:**
  - **mentor.controller.js:** Handles mentor-related logic and operations.
  - **student.controller.js:** Handles student-related logic and operations.
- **Models:**
  - **mentor.schema.js:** Defines the Mentor schema and model.
  - **student.schema.js:** Defines the Student schema and model.
- **index.js:** Main entry point of the application. Sets up Express server, middleware, and routes.

**Setup:**

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables by creating a `.env` file and adding `PORT` and `MONGODBCONNECTIONSTRING` variables.
4. Run the server using `npm start`.

**Usage:**

- Use any API testing tool like Postman to interact with the endpoints.
- Create mentors and students.
- Assign students to mentors and vice versa.
- Retrieve lists of mentors and students.

