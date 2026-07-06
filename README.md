# EcoTrack - S.P.I.T. Community Project 🌍

EcoTrack is a modern, beautifully designed community waste management and volunteer tracking platform developed as an S.P.I.T. F.Y. B.Tech Community Project. 

It features a sleek, glassmorphic user interface, seamless dark-mode integration, and a completely serverless backend powered by Firebase.

## 🚀 Features

- **Public Website (`index.html`)**: A stunning, responsive single-page application with smooth scroll-spying where users can report waste hotspots, track live weather conditions, and register for upcoming cleanup campaigns.
- **Admin Dashboard (`admin.html`)**: A secure, premium dashboard with a sleek floating "control ribbon". Admins can view incoming reports and seamlessly manage registered volunteers.
- **Dark Mode Sync**: Both the main page and the admin panel feature a gorgeous dark mode with glowing animated orbs. User theme preferences are automatically synced across pages via browser LocalStorage.
- **Serverless Backend**: Powered entirely by Firebase (Firestore & Storage), eliminating the need for complex server infrastructure.
- **Real-Time Data Generation**: Tables and stat counters on the admin dashboard are generated automatically as users interact with the public site.

## 🛠️ Technologies Used

- **Frontend**: HTML5, Vanilla CSS3 (Custom Glassmorphism & Modern UI Design), Vanilla JavaScript
- **Backend Database**: Firebase Firestore
- **Media Storage**: Firebase Cloud Storage (for user-uploaded report images)
- **Hosting**: Designed to be hosted seamlessly on GitHub Pages

## 📦 Setup & Deployment

1. **Clone the Repository**
   Download or clone this repository to your local machine.

2. **Firebase Configuration**
   - Create a free project on [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firestore Database** and **Cloud Storage**, temporarily setting their rules to allow public reads/writes for testing.
   - Go to Project Settings, add a new Web App, and copy your Firebase configuration object.
   - Paste those configuration details into the `firebase-config.js` file located in the project folder.

3. **Admin Panel Access**
   - The admin dashboard is intentionally hidden from the main website navigation. It can be accessed directly via `/admin.html`.
   - The default login password is set to `ecotrack2026` (You can change this password by editing the `ADMIN_PASSWORD` variable inside `admin.html`).

4. **Hosting on GitHub Pages**
   - Upload this entire folder to your GitHub repository.
   - Go to your repository settings on GitHub.
   - Navigate to the **Pages** tab on the left sidebar.
   - Under "Source", select the `main` branch and click Save.
   - GitHub will automatically generate a live link for your project in a few minutes! (Your admin panel will be accessible at `your-link.github.io/admin.html`).
