import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Connections from './Database/Connection.js';
import route from './Routes/Routes.js';

dotenv.config(); // Load environment variables from .env file

const PORT = process.env.PORT || 5000; // Define the port for your server

const app = express();

app.use(cors({ origin: ['https://crptoapp.onrender.com'], credentials: true }));
app.use(bodyParser.json());

const URL = process.env.URL;

// Make sure your Connections function is defined correctly to connect to your database
Connections(URL);

app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Define your DefaultData function to initialize default data if needed
function DefaultData() {
  // Implement your default data logic here
}
