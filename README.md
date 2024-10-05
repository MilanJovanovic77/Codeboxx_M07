# Codeboxx_M07
# Codeboxx - Module #07

# 2024-09-20

# Name : Milan Jovanovic

# Github : git@github.com:MilanJovanovic77/Codeboxx_M07.git

# Video link : https://vimeo.com/1016366932/b860f1c1eb

# MongoDB : mongodb+srv://milanj:XKFbNiHrllIrnC30@codeboxxm07.qmxk0.mongodb.net/
    P : XKFbNiHrllIrnC30
    IP address (70.52.72.9)

# ---------------------------------------------------------------------------------------------------

Rocket Elevators Management System
This is a full-stack web application built to manage agents, records, and other employee data. The application uses MongoDB as the database, Express as the backend framework, and React for the frontend. The application is secured using JWT (JSON Web Token) authentication.

# Table of Contents
# Project Structure
# Prerequisites
# Environment Variables
# Backend Setup
# Frontend Setup
# Running the Application
# API Endpoints
# Important Notes


# Project Structure
Arborescence
.
├── backend
│   ├── server.js              # Entry point for the backend
│   ├── routes
│   │   ├── auth.js            # Handles user login and authentication
│   │   ├── record.js          # Handles record-related operations
│   │   ├── recordagent.js     # Handles agent-related operations
│   ├── db
│   │   ├── connection.js      # Handles MongoDB connection
│   ├── middleware
│   │   ├── verifyToken.js     # JWT middleware for protecting routes
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── Login.jsx      # Login page for user authentication
│   │   │   ├── RecordAgents.jsx  # Form for creating or updating agents
│   │   │   ├── RecordListAgents.jsx  # Lists all agents
│   │   │   ├── Navbar.jsx     # Navigation bar with back and create buttons
│   │   ├── App.jsx            # Main application structure with routing
│   │   ├── main.jsx           # Entry point for the frontend React application
│   ├── public
│   │   ├── index.html         # HTML template for the React app
├── README.md                  # Documentation for setting up and deploying the app
└── .env                       # Environment variables for the backend


# Prerequisites
Before you begin, make sure you have the following installed:

Node.js (v14.x or higher)
MongoDB (local or cloud-based such as MongoDB Atlas)
npm (Node Package Manager)

# Environment Variables
You will need to create a .env file in the root of the backend directory to store sensitive information such as the MongoDB connection string and JWT secret.

Sample .env file:
# .env
PORT=5050
MONGO_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/yourDatabase?retryWrites=true&w=majority
JWT_SECRET=R0ck3t3L3vat0r

PORT: The port where your backend server will run.
MONGO_URI: The connection string for your MongoDB database (MongoDB Atlas or local MongoDB).
JWT_SECRET: A secret string used to sign the JWT tokens for secure authentication.

# Backend Setup
Navigate to the backend folder: cd backend
Install dependencies: npm install

Setup MongoDB Connection:

Ensure your MongoDB connection is correctly set up in the .env file. You can use MongoDB Atlas or run MongoDB locally.

Run the Backend Server:

Start the Express server for the backend: npm start

# Frontend Setup
Navigate to the frontend folder: cd frontend

Install dependencies: npm install

Run the Frontend Application:

Start the React development server: npm start

# Running the Application
Start Backend: Run the backend server by navigating to the backend folder and executing npm start.
Start Frontend: Run the frontend by navigating to the frontend folder and executing npm start.
Access the App: Open your browser and navigate to http://localhost:5173 to use the application.

# API Endpoints
Below are the key API endpoints available in the backend (handled by Express):

POST /agents/login: User login and token generation.

Body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "message": "Login successful!",
  "token": "JWT_TOKEN_HERE"
}

GET /agents: Get a list of all agents (requires token).

Headers:
{
  "Authorization": "Bearer JWT_TOKEN_HERE"
}

POST /agents: Create a new agent (requires token).

Body:
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "position": "Agent",
  "region": "North",
  "rating": 90,
  "fee": 100,
  "sales": 10000
}

PATCH /agents/
: Update an existing agent (requires token).

Headers:
{
  "Authorization": "Bearer JWT_TOKEN_HERE"
}

DELETE /agents/
: Delete an agent (requires token).

Headers:
{
  "Authorization": "Bearer JWT_TOKEN_HERE"
}

# Important Notes
JWT Authentication: All routes that manage agents are protected using JWT. Make sure to store the token in localStorage after login and include it in the Authorization header for subsequent requests.
Token Expiry: Ensure that your tokens are valid for the duration you need. By default, they expire after 1 hour (set in the backend when generating the JWT).
CORS: The backend has CORS enabled. Ensure that your frontend and backend are running on different ports (5050 for backend, 5173 for frontend).

END
# ---------------------------------------------------------------------------------------------------
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# What is the difference between React and React Native?

# React:
    What it is: 
        React is a JavaScript library that helps you build user interfaces (UI) for websites.
    What it’s used for: 
        Mostly used to build websites and web apps. With React, we can create the parts of a website that users interact with, like buttons, forms, or the layout of a page.
    How it works: We write code in JavaScript, and React helps organize and update the parts of the page as users click, type, or navigate through your site.

# React Native:
    What it is: 
        React Native is a framework that lets you build mobile apps for phones and tablets using the same React concepts.
    What it’s used for: 
        It’s mainly used for building mobile apps for Android and iOS (like Instagram or Facebook). But instead of building websites, you build apps that run on your phone.
    How it works: 
        Instead of running in a web browser like React, React Native works with mobile-specific components (like buttons or lists that look good on phones) and uses the phone’s native features, like the camera or GPS.
# Key Differences:
    React is for building websites (apps that run in a browser).
    React Native is for building mobile apps (apps that run on iPhones or Android devices).
# ---------------------------------------------------------------------------------------------------

# Is React a framework or a library? 
    React is a library, not a framework.

# What is the difference?
    Library:
        A library is like a toolbox. We can take out the tools you need and use them in your own way. It doesn’t tell us how to build something; we decide how to use it.
        React is a library because it helps us build parts of a website (like buttons, forms, or the layout), but it doesn’t tell us how to organize our entire project. We get to make a lot of choices on our own.
    Framework:
        A framework is like a blueprint or a template. It gives us the structure and rules on how to build something. It’s more controlling because it tells us the way you should organize our project.
        An example of a framework is Angular. It not only helps us build the parts of a website but also tells us how the project should be structured, what files we need, and how to connect everything.
    Key Difference:
        React (library): We’re in control. It helps with specific tasks but leaves the big decisions to us.
        Framework: It controls the whole structure and gives us rules to follow.
# ---------------------------------------------------------------------------------------------------

# HTML vs. JSX:
    HTML is like the language we use to write the structure of a webpage. It’s what we see when we build websites, like adding headings, paragraphs, or images.

    JSX is like a special version of HTML that we use in React. It lets us write HTML-like code inside our JavaScript files. We use JSX to create React components, which are like building blocks of our app.

# Differences:
    HTML is just plain text we write in .html files.
    JSX looks a lot like HTML, but it’s actually JavaScript. It lets us mix HTML with JavaScript to make our web apps interactive.
# ---------------------------------------------------------------------------------------------------

# What makes React attractive for our case?
    We get to build really interactive and dynamic websites. React lets us create parts of the site that update and change without reloading the whole page, which makes our apps feel smooth and fast.

    React makes it easier for us to manage our app’s state. We can keep track of what’s happening in different parts of our app more easily, so things work the way we want them to.

    We can reuse components. If we build a button or a form, we can use it in different parts of our app without having to rewrite the code. This saves us a lot of time and keeps our code neat.

    React has a big community. We can find lots of tutorials, tools, and help online because a lot of people use React and share their knowledge.
# ---------------------------------------------------------------------------------------------------

# What are some alternative technology stacks?
    #1 Angular:
        We use Angular if we want a full framework that gives us everything we need to build a web app, from the structure to the tools. It helps us with both the frontend (what users see) and the backend (server-side stuff) in one package.

    #2 Vue.js:
        We might choose Vue.js if we like React but want something that’s a bit simpler to learn. Vue.js helps us build interactive web apps and is known for being easy to get started with.

    #3 Svelte:
        We could go with Svelte if we want something new and different. It’s a framework that compiles our code into highly optimized JavaScript, which can make our apps faster and easier to maintain.

    #4 Ember.js:
        We’d use Ember.js if we need a lot of built-in features and conventions. It helps us build ambitious web apps with a lot of features right out of the box.

    #5 Backend Technology Stacks:
        We might use Node.js with Express on the backend if we want to build the server side of our app in JavaScript.
        We could also consider Django if we prefer Python for building the backend, as it helps us handle the server-side part of our app with lots of built-in tools.
# ---------------------------------------------------------------------------------------------------