# Dietitian Website

## Overview
The Dietitian Website is a full-stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides users with an intuitive platform to track their food intake, understand nutritional values, and receive insights into their diet. The website includes an AI-powered chatbot that offers calorie counts, benefits, and drawbacks of various food items.

## Features
- **AI-Powered Chatbot:** Uses the Gemini API to provide real-time calorie counts, nutritional benefits, and potential drawbacks of food items.
- **Responsive UI:** Built with React for a seamless and dynamic user experience.
- **Personal Diet Plan:** Built a bot using Gemini API which generates Diet plan based on user's age, weight and what his goal is.
- **Scalable Backend:** Efficient API design using Express.js and MongoDB for data management.
- **Performance Optimization:** Fast response times through optimized API calls and database queries.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas for cloud storage)
- **AI Integration:** Gemini API for nutritional analysis
  
## Installation
### Prerequisites
- Node.js installed
- MongoDB setup (local or cloud)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/dietitian-website.git
   cd dietitian-website
   ```
2. Install dependencies for both frontend and backend:
   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `server` directory.
   - Add necessary environment variables such as:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     GEMINI_API_KEY=your_gemini_api_key
     ```
4. Start the development servers:
   ```sh
   cd client
   npm start  # Runs the React frontend
   ```
   ```sh
   cd server
   npm start  # Runs the Express backend
   ```

## Usage
- Use the chatbot to get nutritional insights.
- Track your calorie intake.

## Future Enhancements
- **Meal Planning:** AI-generated meal plans based on user preferences.
- **Progress Tracking:** Graphical insights on calorie intake trends.
- **Community Support:** Forum for users to share health tips.
- **Mobile App:** Extend the platform to a mobile-friendly application.

## Contributing
Pull requests are welcome! Feel free to fork the repository and make improvements.


