# Kanban Board

This is a Kanban Board application built using **React.js**, **Firebase**, and **Lucide Icons**. It allows users to create, update, and manage tasks across different statuses like `TODO`, `IN PROGRESS`, and `COMPLETED`. Tasks can be prioritized, and users can set deadlines for each task.

## Features

- **Create Tasks**: Add new tasks with a title, description, due date, priority, and status.
- **Task Status Management**: Change the status of tasks by dragging and dropping them between columns or by selecting a new status from a dropdown.
- **Task Priority**: Assign priorities such as `Low`, `Medium`, or `High` to tasks.
- **Task Editing**: Edit tasks to update the title, description, priority, and status.
- **Firebase Integration**: The app uses Firebase Firestore to store and persist tasks in a real-time database.
- **Responsive Design**: The UI is designed to work seamlessly on both desktop and mobile devices.

## Installation

To get the project up and running locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Rajsrivastav234461/BoardInfinity_ass.git
2. Navigate to the project directory:
   cd BoardInfinity_ass
3. Install the dependencies:
   npm install
   
4. Created a .env file in the root directory with your Firebase project credentials:
   REACT_APP_FIREBASE_API_KEY=AIzaSyAI3mUSm9Ie4K8LCtSoZfEhnkfXgvBFy5Y
   REACT_APP_FIREBASE_AUTH_DOMAIN=kanban-board1-b23a8.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=kanban-board1-b23a8
   REACT_APP_FIREBASE_STORAGE_BUCKET=kanban-board1-b23a8.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=771145177818
   REACT_APP_FIREBASE_APP_ID=1:771145177818:web:44e84a23b2120f0206e3e3
   REACT_APP_FIREBASE_MEASUREMENT_ID=G-XSVGVD7W0H

 5.Start the development server:
   npm start
6. Access the app at:
   http://localhost:3000
   
7.Firebase Setup
To connect the app with Firebase:

Created a new Firebase project in the Firebase Console.
Enabled Firestore Database for storing tasks.
Copied my Firebase credentials into the .env file as shown above.

8.Technologies Used
React.js: A JavaScript library for building user interfaces.
Firebase Firestore: A NoSQL cloud database for storing tasks in real-time.
Lucide Icons: A modern, open-source icon set for UI icons.
CSS: Styling for the application.

Made with ❤️ by Nitesh Srivastava




   
