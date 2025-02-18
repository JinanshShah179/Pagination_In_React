# Crypto Gallery

Crypto Gallery is a React application that displays a paginated list of cryptocurrencies with their details fetched from the CoinGecko API. Users can browse through the list and navigate pages using "Prev" and "Next" buttons or directly jump to specific pages.

## Features
- Displays cryptocurrency details including name, price, and image.
- Fetches data from the [CoinGecko API](https://www.coingecko.com/en/api).
- Pagination with the ability to navigate between pages using buttons.
- Styled with custom CSS for a clean and responsive UI.

## Screenshots
![Crypto Gallery Screenshot](#)

## Technologies Used
- **React**: Frontend library for building UI.
- **Axios**: For making HTTP requests.
- **CSS**: Custom styling for components.

## Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
- Node.js (>= 14.x)
- npm (or yarn)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-gallery.git
   ```
2. Navigate to the project directory:
   ```bash
   cd crypto-gallery
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Deployment
To create a production build:
```bash
npm run build
```
The build output will be available in the `build` folder, which can be deployed to any static hosting service.

## Folder Structure
```
crypto-gallery/
|-- public/
|-- src/
    |-- components/
        |-- CryptoCard.jsx
        |-- CryptoList.jsx
        |-- Pagination.jsx
    |-- App.css
    |-- App.jsx
    |-- index.css
    |-- index.js
|-- package.json
```

## API Used
Data is fetched from the CoinGecko API:
- Endpoint: [https://api.coingecko.com/api/v3/coins/markets](https://api.coingecko.com/api/v3/coins/markets)
- Parameters:
  - `vs_currency=usd`
  - `order=market_cap_desc`
  - `per_page=100`
  - `page=1`
  - `sparkline=false`

## Future Enhancements
- Add search functionality to filter cryptocurrencies.
- Display more details like market cap, 24-hour price change, etc.
- Add dark mode for better UI.

## Acknowledgements
- [CoinGecko API](https://www.coingecko.com/en/api) for providing cryptocurrency data.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Author
[Jinansh Shah](https://github.com/your-username)

