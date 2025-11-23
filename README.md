# CommercialApp_Front-End

A robust mobile e-commerce application built with React Native and Expo. This application provides a seamless shopping experience with features like product browsing, cart management, user authentication, and order history.

The image below is the design of the app:
![Design](https://github.com/HuyAnhVuTran/CommercialApp_Front-End/blob/main/figma-design.JPG)

## Features

- **User Authentication**: Secure Login, Registration, and Password Recovery.
- **Product Discovery**: Browse products with details and images.
- **Shopping Cart**: Add items to cart, view cart summary, and manage quantities.
- **Favorites**: Save items to your wishlist for later.
- **Order Management**: View order history and status.
- **User Profile**: Manage user information.
- **Checkout Flow**: Confirmation and success screens for orders.

## Tech Stack

- **Framework**: [React Native](https://reactnative.dev/)
- **Platform**: [Expo](https://expo.dev/)
- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **State Management**: React Context (CartContext)
- **Testing**: [Jest](https://jestjs.io/) & [React Test Renderer](https://reactjs.org/docs/test-renderer.html)
- **UI Components**: React Native Elements, React Native SVG

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/client) app on your physical device (Android/iOS) or an emulator.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HuyAnhVuTran/CommercialApp_Front-End.git
   cd CommercialApp_Front-End
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the App

Start the development server:

```bash
npm start
```

This will start the Expo Metro Bundler. You can then:
- **Scan the QR code** with the Expo Go app on your Android device.
- **Scan the QR code** with the Camera app on your iOS device (if logged in to Expo).
- Press `a` to run on Android Emulator.
- Press `i` to run on iOS Simulator.
- Press `w` to run in the web browser.

## Testing

This project uses Jest for testing. To run the tests:

```bash
npm test
```

## Project Structure

```
CommercialApp_Front-End/
├── screens/             # Application screens and logic
│   ├── CartContext.js   # Context for managing cart state
│   ├── login.js         # Login screen
│   ├── main.js          # Main dashboard/home screen
│   ├── product.js       # Product details screen
│   └── ...              # Other screens (register, profile, etc.)
├── App.js               # Main entry point
├── app.json             # Expo configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```

The image below is the design of the app
![alt text](https://github.com/HuyAnhVuTran/CommercialApp_Front-End/blob/main/figma-design.JPG)
