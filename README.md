RestAPI - Node.js and Express.js API

This is a RESTful API built using Node.js and Express.js, 
allowing clients to perform CRUD operations (Create, Read, Update, and Delete) on user data. 
The API runs on localhost:3000 and provides endpoints to view, add, and delete user data.
For testing and interacting with the API, Postman is used.

Features
GET /api/users: Fetch all users.
GET /api/users/:id: Fetch a user by ID.
POST /api/users: Add a new user.
DELETE /api/users/:id: Delete a user by ID.

Technologies Used:

Node.js: JavaScript runtime environment for the server.
Express.js: Web framework for Node.js to simplify routing and API handling.
JSON: Data is stored in a MOCK_DATA.json file, simulating a database.
Postman: Used for testing the API endpoints.

Installation & Setup:
Prerequisites
Ensure that Node.js and npm are installed on your machine.
You can download and install Node.js from here.

Testing with Postman:
GET /api/users: Use Postman to send a GET request to http://localhost:3000/api/users to view all users.
GET /api/users/:id: Use Postman to send a GET request to http://localhost:3000/api/users/1 to view a specific user by their id.
POST /api/users: Use Postman to send a POST request with the required user data to http://localhost:3000/api/users.
DELETE /api/users/:id: Use Postman to send a DELETE request to remove a user by their id.



