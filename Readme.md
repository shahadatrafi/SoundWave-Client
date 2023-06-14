# Sound Wave Music Summer Camp School Website

[Live Link](https://soundwave-e8dde.web.app/)

This is the official website for Sound Wave Music Summer Camp School, where students can explore their musical talents and learn from talented instructors. The website provides a user-friendly interface and offers various features for different user roles, including admin, instructor, and student. It is designed to be visually appealing, with attention to color contrast, alignment, and overall aesthetic appeal.

## Key Features

1. User Registration and Login System:
   - Secure login page with email and password fields.
   - Registration page with required fields like name, email, password, and optional fields like photo URL, gender, phone number, and address.
   - Social login options available for convenience.

2. Homepage:
   - Engaging top slider section featuring relevant images, text, and messages.
   - Popular Classes section showcasing the top 6 classes based on student enrollment.
   - Popular Instructors section highlighting the top 6 instructors based on class popularity.
   - Additional section with attractive design and animations.

3. Instructors Page:
   - Display of all instructors with their images, names, emails, and optionally, the number and names of classes they teach.
   - See Classes button to explore the classes taught by each instructor.

4. Classes Page:
   - Presentation of all approved classes.
   - Each class includes an image, class name, instructor name, available seats, price, and select button.
   - Login prompt for users who are not logged in.
   - Disabled select button for classes with no available seats or when logged in as admin or instructor.
   - Highlighting of classes with no available seats.

5. Student Dashboard:
   - Private dashboard accessible only by students.
   - My Selected Classes section displaying the classes the student has booked.
   - Relevant information on each class, including delete and pay buttons.
   - Deletion of selected classes by the student.
   - My Enrolled Classes section showing all successfully enrolled classes.

6. Payment:
   - Pay button in the Student Dashboard for each selected class.
   - Redirection to the payment page to finalize the payment.
   - Successful payment reduces the available seats for the class by 1.
   - Display of class information on the My Enrolled Classes page and removal from the My Selected Classes page.
   - Payment history page for students, sorted in descending order.

7. Instructor Dashboard:
   - Private dashboard accessible only by instructors.
   - Add a Class page with a form for adding new classes.
   - Fields for class name, class image, instructor name (read-only), instructor email (read-only), available seats, and price.
   - Add button to create a new class with pending status.
   - My Classes section displaying all classes added by the instructor.
   - Relevant information for each class, including pending/approved/denied status, total enrolled students, feedback, and update button.
   - Display of total enrolled students for classes.
   - Feedback section for denied classes, where admins can provide feedback.

8. Admin Dashboard:
   - Private dashboard accessible only by administrators.
   - Manage Classes page displaying all classes added by instructors.
   - Information shown includes class image, class name, instructor name, instructor email, available seats, price, and status (pending/approved/denied).
   - Buttons for approving, denying, and sending feedback to instructors.
   - Manage Users page with relevant information of all registered users.
   - Make Instructor button to update user role as an instructor.
   - Make Admin button to update user role as an admin.

## Technology Stack

- Frontend:
  - React.js
  - HTML
  - CSS
  - JavaScript
  - React Router for routing
  - Animation
