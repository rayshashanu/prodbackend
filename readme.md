1. Clone the Repository
First, clone the repository to your local machine:

git clone https://github.com/yourusername/your-repository-name.git
cd your-repository-name

2. Install Dependencies
Backend (Node.js and Express)
Navigate to the backend directory and install dependencies:

cd backend
npm install

Frontend (React)
Navigate to the frontend directory and install dependencies:

cd ../frontend
npm install

3. Configure Environment Variables
Create a .env file in the backend directory and add the following environment variables:

PORT=1000
MONGODB=mongodb+srv:mongodb+srv://rayshashanu:raysha@8182@cluster0.ly25y9i.mongodb.net/raysha/
sessionSecret=123

4. Run MongoDB
Ensure MongoDB is running on your local machine. You can start it using the following command:

mongod
Alternatively, if you are using MongoDB Atlas, make sure your connection string is correctly configured in the .env file.

5. Start the Backend Server
In the backend directory, start the server:

npm i
node index.js

6. Start the Frontend Application
In the frontend directory, start the React development server:

npm i
npm start



