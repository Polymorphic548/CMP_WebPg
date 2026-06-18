// ============================================================
//  EcoTrack Goregaon — Firebase Configuration
// ============================================================
//  HOW TO SET UP:
//  1. Go to https://console.firebase.google.com
//  2. Click "Add project" and create a new project (free Spark plan is fine)
//  3. In your project, click the web icon (</>) to add a web app
//  4. Copy the firebaseConfig object and paste it below
//  5. In the Firebase console sidebar:
//     - Go to "Build > Firestore Database" → Click "Create database" → Start in TEST MODE
//     - Go to "Build > Storage" → Click "Get started" → Start in TEST MODE
//  6. You're all set! The website will now save data to your Firebase project.
// ============================================================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "000000000000",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services (available globally)
const db = firebase.firestore();
const storage = firebase.storage();
