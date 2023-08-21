# CryptoVerse
### Crypto Blog Web App

A Crypto Blog web app that provides details of top cryptocurrencies along with recent news on them.

## Features

- View details of top cryptocurrencies.
- View history of individual cryptocurrencies and other details
- Read recent news articles related to cryptocurrencies.
- User-friendly UI powered by AntDesign.

## Technologies Used

- React
- Vite
- AntDesign
- Coinranking API [RapidAPI]
- Bing News API [RapidAPI]

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/krischald-21/cryptoverse
   ```

2. Navigate to the project directory:

   ```terminal
   cd cryptoverse
   ```
  
3. Install Dependencies

   ```nodejs
   npm install
   ```
   
## Configuration

1. Obtain API configurations from RapidAPI for Coinranking API and Bing News API.
2. Create a `.env` file in the root directory and add your API keys:

   ```txt
   VITE_COINRANKING_RAPIDAPI_KEY=your-coinranking-api-key
   VITE_COINRANKING_RAPIDAPI_HOST=your-coinranking-host
   VITE_BING_APIS_SDK=your-bingnews-api-sdk,
   VITE_BING_RAPIDAPI_KEY=your-bingnews-api-key
   VITE_BING_RAPIDAPI_HOST=your-bingnews-host
   ```

## Usage
1. Run the development server:

   ```nodejs
   npm run dev
   ```

2. Open your browser and navigate to the designated localhost port provided by vite on the terminal:
   ```example
   http://localhost:5126
   ```

## Deployment

The app is deployed and accessible at <a href="https://vite-crypto-app.netlify.app/">CryptoVerse</a>

## Screenshots

![image](https://github.com/krischald-21/cryptoverse/assets/113814736/b1c36252-bb40-47b3-bd66-67de11503fd5)
Caption: Homepage.
![image](https://github.com/krischald-21/cryptoverse/assets/113814736/2bd1c922-ca79-4eb5-8abf-be296adf2ae9)
Caption: News Section.
![image](https://github.com/krischald-21/cryptoverse/assets/113814736/9cde5751-20e3-433e-b17a-7f4ad2329600)
Caption: Crytocurrencies Page
![image](https://github.com/krischald-21/cryptoverse/assets/113814736/4cbaa162-dc20-47b2-b245-f8982ff26fcf)
Caption: Line Chart in Cryptocurrencies' detail Page

## Acknowledgements

- Thanks to RapidAPI for providing data via Coinranking and Bing News APIs for the app.
- Built with ❤️ by Krischal Dhungel.

## Disclaimer

This project was created for learning purposes while following an online tutorial. I do not own the assets used in the application. Assets and styles used belong to the original creator of this application.

Feel free to replace the placeholders and customize the content further to match your project's details and preferences.
