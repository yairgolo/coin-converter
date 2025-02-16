# Coin Converter

A comprehensive web application that provides real-time currency conversion services. This user-friendly tool enables users to quickly and accurately convert between different currencies using up-to-date exchange rates.

## Features

- Real-time currency conversion
- Support for multiple currencies worldwide
- Interactive and responsive design
- Historical exchange rate data
- Save favorite currency pairs
- Mobile-friendly interface
- Easy-to-use conversion calculator

## How It Works

1. Select your source currency
2. Choose your target currency
3. Enter the amount you want to convert
4. Get instant conversion results
5. View historical rate trends (optional)

## Technical Implementation

### Frontend
- React 18 with TypeScript
- Vite for fast development and building
- Styled-components for styling
- Redux for state management
- Axios for API calls

### API Integration
- Real-time exchange rates from reliable currency APIs
- Automatic rate updates
- Error handling and fallback mechanisms

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open `http://localhost:5173` in your browser

## Project Structure

```
coin-converter/
├── src/
│   ├── components/    # React components
│   ├── services/     # API and business logic
│   ├── styles/       # Global styles
│   └── utils/        # Helper functions
├── public/           # Static assets
└── docs/            # Documentation
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
