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
  apiKey: "AIzaSyDarjkNZ2nrlgmcqUdhNeSHOiZbPBDUOOQ",
  authDomain: "ecotrack-goregaon.firebaseapp.com",
  databaseURL: "https://ecotrack-goregaon-default-rtdb.firebaseio.com",
  projectId: "ecotrack-goregaon",
  storageBucket: "ecotrack-goregaon.firebasestorage.app",
  messagingSenderId: "1098723522065",
  appId: "1:1098723522065:web:d022f836c125ea2872e3b0",
  measurementId: "G-E791KMHFBZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services (available globally)
const db = firebase.firestore();
const storage = firebase.storage();
