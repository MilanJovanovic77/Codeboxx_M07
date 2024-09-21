# Codeboxx_M07
# Codeboxx - Module #07

# 2024-09-20

# Name : Milan Jovanovic

# Github : git@github.com:MilanJovanovic77/Codeboxx_M07.git

# Video link :

# MongoDB : mongodb+srv://milanj:XKFbNiHrllIrnC30@codeboxxm07.qmxk0.mongodb.net/
    P : XKFbNiHrllIrnC30
    IP address (70.52.72.9)


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

# Arborescence

server/
├── db/
│   ├── connection.js           // MongoDB connection script
│   └── routes/
│       └── record.js           // Existing records API
├── .env                         // Environment variables
├── config.env                   // Additional configuration (if needed)
└── server.js                    // Main server file

client/
├── node_modules/               // Installed dependencies
├── public/
│   └── vite.svg                // Vite logo or any static assets
├── src/
│   ├── assets/                 // Images, fonts, and other static assets
│   │   ├── images/             // Images specific to your application
│   │   └── react.svg           // Example asset
│   ├── components/             // Reusable components (buttons, inputs, etc.)
│   │   ├── Navbar.jsx          // Navigation bar component
│   │   ├── Record.jsx          // Component for individual record
│   │   └── RecordList.jsx      // Component for displaying a list of records
│   ├── App.css                 // Main CSS file for styling
│   ├── App.jsx                 // Main application component
│   ├── Index.css               // Additional styles, if needed
│   └── main.jsx                // Entry point of the React application
├── eslint.config.js            // ESLint configuration file
├── index.html                  // Main HTML file
├── postcss.config.js           // PostCSS configuration
├── package.json                // Project dependencies and scripts
├── package-lock.json           // Exact versions of installed dependencies
├── vite.config.js              // Vite configuration
└── tailwind.config.js          // Tailwind CSS configuration


server/
├── db/
│   ├── connection.js           // MongoDB connection script
│   └── routes/
│       ├── record.js           // Existing records API
│       └── auth.js             // New authentication routes
├── middleware/
│   └── authMiddleware.js       // Authentication middleware
├── models/
│   └── user.js                 // User model (Mongoose)
├── .env                         // Environment variables
├── config.env                   // Additional configuration (if needed)
└── server.js                    // Main server file

client/
├── node_modules/               // Installed dependencies
├── public/
│   └── vite.svg                // Vite logo or any static assets
├── src/
│   ├── assets/                 // Images, fonts, and other static assets
│   │   ├── images/             // Images specific to your application
│   │   └── react.svg           // Example asset
│   ├── components/             // Reusable components (buttons, inputs, etc.)
│   │   ├── Navbar.jsx          // Navigation bar component
│   │   ├── Login.jsx           // Login component
│   │   ├── Home.jsx            // Home component for displaying agents
│   │   ├── Unauthorized.jsx     // Unauthorized access component
│   │   ├── Record.jsx          // Component for individual record
│   │   └── RecordList.jsx      // Component for displaying a list of records
│   ├── App.css                 // Main CSS file for styling
│   ├── App.jsx                 // Main application component
│   ├── Index.css               // Additional styles, if needed
│   └── main.jsx                // Entry point of the React application
├── eslint.config.js            // ESLint configuration file
├── index.html                  // Main HTML file
├── postcss.config.js           // PostCSS configuration
├── package.json                // Project dependencies and scripts
├── package-lock.json           // Exact versions of installed dependencies
├── vite.config.js              // Vite configuration
└── tailwind.config.js          // Tailwind CSS configuration