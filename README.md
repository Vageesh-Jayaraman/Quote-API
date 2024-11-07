# Quote Generation API

Welcome to the **Quote Generation API**! 🎉 This API serves a variety of quotes ranging from motivational, inspirational, humorous, and more. It's perfect for websites, applications, or personal projects that need an injection of wisdom or fun.

🔗 **Live Demo**: [https://quote-api-drab-ten.vercel.app/](https://quote-api-drab-ten.vercel.app/)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [How to Use](#how-to-use)
- [Running Locally](#running-locally)
- [License](#license)

---

## Features 🎉

- **Random Quote Generation**: Get a random quote from various themes.
- **Custom Quote Filters**: Fetch quotes based on author, category, or tags.
- **AI-Generated Quotes**: Dynamic quote generation using the Gemini API.
- **Lightweight and Scalable**: Powered by Node.js and hosted on Vercel for fast, scalable API access.

---

## Tech Stack ⚙️

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via MongoDB Atlas)
- **Hosting**: Vercel

---

## API Endpoints 📡

### 1. Fetch a Random Quote
- **Endpoint**: `GET /quotes/random`
- **Description**: Retrieves a random quote from the database, ideal for users seeking inspiration or a unique quote each time.

### 2. Retrieve Quote by ID
- **Endpoint**: `GET /quotes/{id}`
- **Description**: Returns a specific quote by its unique identifier, allowing users or developers to fetch a particular quote precisely.

### 3. Fetch Quotes by Category
- **Endpoint**: `GET /quotes/category/{category}`
- **Description**: Allows retrieval of quotes from a designated category (e.g., "motivation", "humor"), providing users with targeted quote collections.

### 4. Retrieve Quotes by Author
- **Endpoint**: `GET /quotes/author/{author}`
- **Description**: Fetches quotes attributed to a specific author, enabling users to view quotes exclusively from their preferred personalities.

### 5. Fetch Quotes by Popularity Score
- **Endpoint**: `GET /quotes/popularity/{score}`
- **Description**: Retrieves quotes based on a popularity metric or score, helping users access the most highly rated or frequently shared quotes.

### 6. Retrieve Quotes by Tag
- **Endpoint**: `GET /quotes/tag/{tag}`
- **Description**: Fetches quotes associated with specific tags, facilitating more granular filtering based on user interest or thematic relevance.

### 7. Fetch Quotes by Language
- **Endpoint**: `GET /quotes/language/{language}`
- **Description**: Retrieves quotes available in a specified language, catering to users looking for quotes in their native language or for multilingual applications.

### 8. Retrieve Quotes by Date
- **Endpoint**: `GET /quotes/date/{date}`
- **Description**: Allows users to fetch quotes added or posted on a particular date, useful for finding daily or historically significant quotes.

### 9. Fetch Quotes Within a Date Range
- **Endpoint**: `GET /quotes/date-range`
- **Description**: Retrieves quotes posted within a specific date range, providing a means for users to browse quotes over a designated period.

### 10. Limit Number of Quotes Returned
- **Endpoint**: `GET /quotes?limit={number}`
- **Description**: Limits the number of quotes returned, offering a way to control and manage the volume of data in responses, especially for pagination or sampling needs.

### 11. Generate a New Quote
- **Endpoint**: `GET /quotes/generate`
- **Description**: Leverages the Gemini API to generate new quotes using AI, offering dynamically created content that aligns with user-specified themes or categories.

---

## How to Use 🛠️

1. **Make API Requests**: You can interact with the API by sending HTTP requests to the above endpoints. Each request returns a JSON response containing the requested quote(s).
   
2. **Try It Out**: Use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to test and explore the API endpoints interactively.

---

## Running Locally 🖥️

To run the API locally, follow these steps:

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/quote-generation-api.git
    cd quote-generation-api
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Set Up MongoDB Atlas**  
    - Create a MongoDB Atlas account and set up a new cluster.
    - Obtain the connection string and replace it in the `.env` file.

4. **Start the Server**
    ```bash
    npm start
    ```

5. The server will start on `http://localhost:3000`.

---

## License 📜

This project is licensed under the MIT License

