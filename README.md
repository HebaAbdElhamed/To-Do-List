# React ToDo List with Tailwind CSS

A modern ToDo list application built with React js. This app allows users to add, edit, and delete tasks. It also includes a feature to delete all tasks at once. The app uses React Hooks (`useState`, `useEffect`) for managing state and side effects, React Router (`useNavigate`, `useLocation`) for navigation, and Tailwind CSS for styling.

![ToDo App Preview](./public/imagePreview.png) <!-- Add path to your image here -->

## Features

- **Add Tasks:** Add new tasks to your ToDo list.
- **Edit Tasks:** Edit existing tasks and update their details.
- **Delete Tasks:** Remove tasks from the list individually.
- **Delete All Tasks:** Remove all tasks from the list with a single click.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation between different views and pages.
- **Tailwind CSS**: For modern, utility-first CSS styling.
- **React Hooks**: `useState`, `useEffect`, `useNavigate`, `useLocation`.

## Installation

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HebaAbdElhamed/To-Do-List.git

2. **Navigate to the project directory:**

    ```bash
    cd To-Do-List

3. **Install the dependencies:**

    ```bash
    npm install

4. **Start the development server:**

    ```bash
    npm start

5. **Open your browser and go to http://localhost:3000 to see the app running.**


## Usage

### Adding a Task
- To add a task, simply type your task in the input field and click the "Add me" button.

### Editing a Task
- To edit a task, click the Edit button next to the task you wish to edit. A text input will contain your text, allowing you to modify the task.

### Deleting a Task
- To delete a task, click the Delete button next to the task you wish to remove.

### Deleting All Tasks
- You can clear all tasks by clicking the "Delete All" button at the bottom of the list.

## File Structure
   
      /To-Do-List
      │
      ├── /public
      │   ├── index.html
      │   └── ...
      │
      ├── /src
      │   ├── /components
      │   │   ├── Button.js
      │   │   ├── Header.js
      │   │   └── ...
      │   ├── /pages
      │   │   ├── Today.js
      │   │   └── Welcome.js
      │   ├── App.js
      │   ├── index.js
      │   └── ...
      │
      ├── tailwind.config.js
      └── package.json

## Author
Created by [Heba AbdElhamed](https://github.com/HebaAbdElhamed).
