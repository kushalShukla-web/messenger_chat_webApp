# Facebook Chat Application
https://adoring-hypatia-31158d.netlify.app/


A real-time chat application inspired by Facebook Messenger, built using React, Material UI, and Firebase for the backend.


## Table of Contents


- [Demo](#demo)
- [Features](#features)
- - [Real-time Messaging](#real-time-messaging)
- - [User Authentication](#user-authentication)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- - [Login](#login)
- - [Chat Interface](#chat-interface)
- [Technologies Used](#technologies-used)
- [Firebase Configuration](#firebase-configuration)
- [Contributing](#contributing)
- [License](#license)

## Demo

![Screenshot (154)](https://github.com/kushalShukla-web/messenger_chat_webApp/assets/85934954/8e6535d0-fa3a-4dae-9b33-f77b4eaee9a6)

## Features

### Real-time Messaging

- Engage in real-time conversations with friends.
- Messages are instantly delivered and updated.

### User Authentication

- Securely authenticate users with Firebase Authentication.
- Protect user data and messages from unauthorized access.

## Getting Started

### Prerequisites

List any prerequisites or dependencies required to run your application.

### Installation

1. Clone the repository: `git clone https://github.com/your-username/facebook-chat-app.git`
2. Navigate to the project directory: `cd facebook-chat-app`
3. Install dependencies: `npm install`
4. Create a Firebase project and set up the necessary configuration (see [Firebase Configuration](#firebase-configuration)).
5. Start the development server: `npm start`

## Usage

### Login

- Users can sign up or log in using their existing credentials.
- Firebase authentication ensures secure access.

### Chat Interface

- Users can see their friends' list.
- Start a new conversation by selecting a friend.
- Exchange messages in real-time.

## Technologies Used

- React
- Material UI
- Firebase (Authentication, Firestore for real-time data)

## Firebase Configuration

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Set up Firebase Authentication and Firestore database.
3. Copy the Firebase configuration object (available in project settings) and replace it in your app's configuration file.

Example:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
