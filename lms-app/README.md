# LMS Mobile App

This is a React Native mobile application for managing library activities, built with Expo and Expo Router.

## Features
- User registration and login
- Dashboard for library management
- Toast notifications for feedback (using react-native-toast-message)
- Tailwind CSS for styling (via nativewind)

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/rojash03/LMS-MobileApp.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npx expo start
   ```

### Usage
- The app entry point is `index.js` in the root directory.
- Screens are located in the `app/` folder.
- Toast notifications are used for error and success messages.

### Styling
- Tailwind CSS classes are used via the `nativewind` package.

### Additional Info
- API endpoint: `https://library-mgmt-system-1.onrender.com/api`
- For more details, see code comments in each file.

## License
This project is for educational purposes at London Metropolitan University.
