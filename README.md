# Star Wars App

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Third-Party Libraries](#third-party-libraries)
- [Screens and Features](#screens-and-features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Run the Application](#run-the-application)

## About

The Star Wars App is a mobile application developed using React Native CLI, designed for both iOS and Android platforms.
The app allows users to explore the Star Wars Universe and provides information on their favorite characters. It
includes features like character details, gender-based counts, and a search function.

## Tech Stack

- **React Native CLI:**

- **Redux Toolkit (RTK):**

- **TypeScript:**

## Third-Party Libraries

The Star Wars App uses several third-party libraries to enhance functionality:

- **axios:**

- **react-native-paper:**

- **react-navigation:**

- **react-native-gesture-handler:**

- **react-native-svg:**

- **react-native-svg-transformer:**

- **react-native-screens:**

## Screens and Features

### HomeScreen

- HomeScreen features a scrollable and paginated list of elements representing Star Wars characters.
- Users can navigate to the CharacterDetailsScreen to view additional character information.
- Three counters calculate totals based on male, female, and other gender characters.
- A "Clear Favorites" button allows users to reset all counters.
- Search functionality allows users to search for specific characters by sending API requests.
- The CharacterCard has an "Add to Favorites" button for saving characters to the favorites list.
- Pagination works alongside API requests, displaying the total number of characters and the current number of
  characters.

### CharacterDetailsScreen

- CharacterDetailsScreen displays additional information about a selected character, including:
    - Sex
    - Height
    - Hair Color
    - Birth Year
    - Eye Color
    - Mass
- Depending on the character's gender, the avatar icon changes to male, female, or other.

### Additional Features

- The app performs API requests through `createAsyncThunk`.
- The user interface (UI/UX) is designed to provide a user-friendly experience.

## Project Structure

The project follows a structured organization:

Star-Wars-App/
├── assets/
│ ├── fonts/
│ │ ├── StarJedi.ttf
│ │ ├── StarJediRounded.ttf
│ └── icons/
│ ├── ...
├── src/
│ ├── actions/
│ │ ├── characters.ts
│ ├── components/
│ │ ├── CharacterCard/
│ │ │ ├── index.tsx
│ │ ├── CharacterList/
│ │ │ ├── index.tsx
│ │ ├── FavoriteCounter/
│ │ │ ├── index.tsx
│ │ ├── Pagination/
│ │ │ ├── index.tsx
│ │ ├── Search/
│ │ │ ├── index.tsx
│ │ ├── TextInfo/
│ │ │ ├── index.tsx
│ ├── screens/
│ │ ├── HomeScreen.tsx
│ │ ├── CharacterDetailsScreen.tsx
│ ├── store/
│ │ ├── slices/
│ │ │ ├── charactersSlice.ts
│ │ │ ├── paginationSlice.ts
│ │ ├── hooks.ts
│ │ ├── root-reducer.ts
│ │ ├── store.ts
│ ├── types/
│ │ ├── index.ts
└── App.tsx

## Getting Started

Getting Started
Clone the Repository:

git clone https://github.com/KhromenkoDaniel/star_wars_counter_app.git

Install Dependencies:

cd star_wars_counter_app
npm install

## Run the Application:

For iOS:

npx react-native run-ios

For Android:

npx react-native run-android

