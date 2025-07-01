# 🎮 Guess The Number Game - React Native

A fun and interactive number guessing game built using **React Native** and **Expo**. The app lets a user pick a number between 1 and 100, and the app (opponent) tries to guess it using a smart binary search strategy.

---

## 🚀 Features

- 🎲 User chooses a number, and the app guesses it
- 🔁 App uses dynamic range to narrow guesses (like binary search)
- 📱 Optimized for mobile devices using Expo
- 💥 Game over screen with number of rounds taken
- 🧠 Input validation and alerts for wrong hints
- 🔁 Restart functionality
- 🗂️ Modular folder structure with reusable components and utilities

---

## 📂 Folder Structure

GuessTheNumberGame/
├── App.js
├── components/
│ └── (You can add future custom UI components here)
├── constants/
│ └── (Colors, fonts, global styles if needed)
├── screens/
│ ├── StartGameScreen.js
│ ├── GameScreen.js
│ └── GameOverScreen.js
├── utils/
│ └── generateRandom.js
├── package.json
└── README.md


## 🛠️ Installation & Running the App

1. **Install Expo CLI (if not already):**
   npm install -g expo-cli
2. **Clone the repo or create using create-expo-app:**
npx create-expo-app GuessTheNumberGame
cd GuessTheNumberGame

## Start the development server:
npx expo start
Run on device:

 **Scan the QR code with Expo Go (Android/iOS)**

## Author
Jaivanth Koppula
Built as an intermediate-level React Native project for learning and demonstration.
