# Express.js Practice Project 🚀

This repository contains a beginner-to-intermediate level practice project using **Express.js**, focused on mastering routing, middleware, HTTP methods, and frontend-backend integration.

## 🔧 Features Covered

### ✅ Clean Project Structure
- Organized routes, controllers, and middleware into separate folders for modular and maintainable code.

### 📂 Static File Serving
- Used `express.static()` to serve static files from the `public` directory (e.g., `index.html`).

### 🛣️ Express Routing
- Implemented RESTful routing:
  - `GET /api/posts` – Fetch all posts (with optional `limit` query)
  - `GET /api/posts/:id` – Fetch single post by ID
  - `POST /api/posts` – Create a new post
  - `PUT /api/posts/:id` – Update a post by ID
  - `DELETE /api/posts/:id` – Delete a post by ID

### 🧠 Middleware
- Custom **logger** middleware to log incoming requests.
- **Error handling** middleware to manage and send consistent error responses.
- `notfound` middleware to handle undefined routes gracefully.

### 📬 Request Handling
- Practiced `req.params` and `req.query` for dynamic and flexible routing.
- Parsed JSON and URL-encoded data using Express's body parsers.

### ⚠️ Error Handling
- Implemented centralized error handling with custom status codes and messages.

### 🔗 Frontend Integration
- Linked a basic frontend (`index.html`) with backend API using `fetch`.
- Dynamically created DOM elements to display and add posts using JavaScript.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript (Fetch API)
