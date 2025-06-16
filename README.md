# Shopping Cart Application

A simple shopping cart application built with React that allows users to add products to a cart, update quantities, and remove items.

## Features

- Add products to shopping cart
- Update product quantities in cart
- Remove products from cart
- Display product list and current cart contents

## Technologies Used

- React 19
- Context API for state management
- React Hooks (useReducer, useContext)

## Getting Started

### Prerequisites

- Node.js (latest stable version recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/shopping-cart.git
   cd shopping-cart
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
shopping-cart/
├── public/               # Public assets
│   ├── index.html        # HTML template
│   └── ...               # Other static files
├── src/                  # Source code
│   ├── App.js            # Main application component
│   ├── App.css           # Styles
│   ├── Cart.jsx          # Cart component
│   ├── CartContext.js    # Context for cart state management
│   └── index.js          # Entry point
└── package.json          # Project dependencies and scripts
```

## How It Works

The application uses React's Context API for state management. The cart functionality is implemented using:

- **CartContext.js**: Provides the cart state and dispatch functions to all components
- **Cart.jsx**: Handles displaying products and cart items, along with functions to add, update, and remove items
- **App.js**: Main component that wraps the application with the CartProvider

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm build`: Builds the app for production
- `npm eject`: Ejects from create-react-app

## Future Improvements

- Add product images and descriptions
- Implement product categories
- Add price calculations and checkout functionality
- Improve UI/UX with better styling
- Add user authentication
- Persist cart data using localStorage or a backend service

## License

MIT

## Author

Your Name
