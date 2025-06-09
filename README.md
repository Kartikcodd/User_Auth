# 👤 React Profile Update App (with Mocked API)

This is a React application that allows users to **view and update their profile** — including name, bio, and profile picture. It uses mocked API responses, so no backend server is required to test it.

---

## 🚀 Getting Started

### 🛠 Prerequisites

Make sure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

---

### 📦 Installation

1. **Clone the Repository / Extract Zip**
   ```bash
   cd your-folder-name
Install Dependencies

bash
Copy
Edit
npm install
Start the Application

bash
Copy
Edit
npm start
Visit http://localhost:3000 in your browser.

🧪 Mocked API
All API calls are mocked locally using a USE_MOCK_API flag in src/api/auth.js:

js
Copy
Edit
const USE_MOCK_API = true;
✅ Mock Login Credentials
Email: test@example.com

Password: 123456

Mock Endpoints Simulated
POST /api/auth/login

GET /api/user/profile

PUT /api/user/profile

These are simulated with setTimeout to mimic network latency.

✨ Features
🔐 Mock login with email and password

👁 View profile: name, email, ID

✏️ Update profile: name, bio, image

🧠 Global authentication context using React Context API

📦 FormData used for image upload

💅 Responsive and styled UI with custom CSS

📁 Folder Structure
bash
Copy
Edit
src/
├── api/               # Mocked API calls
├── context/           # Authentication context
├── pages/             # Profile & UpdateProfileForm components
├── CustomCSS/         # Styling for profile page
├── App.js             # Main app layout
├── index.js           # React DOM rendering
📨 Author
Kartik Panchal
📧 kartikk.panchal@gmail.com
🌐 GitHub
