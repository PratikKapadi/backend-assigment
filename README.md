# Task Management API

This is a simple Task Management API built using Node.js and Express.js. It provides basic CRUD (Create, Read, Update, Delete) operations for managing tasks.

## Features

- **Retrieve all tasks**: Fetch a list of all tasks.
- **Retrieve a specific task**: Fetch the details of a specific task by its ID.
- **Create a new task**: Add a new task with a title and description.
- **Update an existing task**: Modify the title and description of an existing task.
- **Delete a task**: Remove a task by its ID.

## Endpoints

### 1. Get All Tasks

- **Endpoint**: `GET /tasks`
- **Description**: Retrieve a list of all tasks.
- **Response**:
  - Status: `200 OK`
  - Body: List of tasks.

### 2. Get Task by ID

- **Endpoint**: `GET /tasks/:id`
- **Description**: Retrieve details of a specific task by its ID.
- **Response**:
  - Status: `200 OK` if task is found.
  - Status: `404 Not Found` if task is not found.

### 3. Create a New Task

- **Endpoint**: `POST /tasks`
- **Description**: Create a new task with a title and description.
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```
- **Response**:
  - Status: `201 Created` with the created task details.
  - Status: `400 Bad Request` if title or description is missing.

### 4. Update a Task

- **Endpoint**: `PUT /tasks/:id`
- **Description**: Update the title and description of a task by its ID.
- **Request Body**:
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description"
  }
  ```
- **Response**:
  - Status: `200 OK` with the updated task details.
  - Status: `400 Bad Request` if title or description is missing.
  - Status: `404 Not Found` if task is not found.

### 5. Delete a Task

- **Endpoint**: `DELETE /tasks/:id`
- **Description**: Delete a task by its ID.
- **Response**:
  - Status: `200 OK` with a success message.
  - Status: `404 Not Found` if task is not found.

## Error Handling

A global error handler is implemented to handle unexpected errors. If an error occurs, the server responds with:

- Status: `500 Internal Server Error`
- Body: `{ "message": "An unexpected error occurred" }`

## Installation and Setup

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. The server will run on `http://localhost:4000`.
