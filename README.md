# 🎬 NetflixGPT

A Netflix clone built with React + Redux Toolkit, integrated with GPT-powered search using the Groq API.  
Browse movies from TMDB, watch trailers, and get AI-powered movie recommendations.

---

## 🚀 Live Demo
[![Watch the demo](https://img.youtube.com/vi/p82y6PdajPQ/maxresdefault.jpg)](https://youtu.be/p82y6PdajPQ)  
*(Click the image to watch on YouTube)*

---

## 📸 Screenshots

### 🏠 Home Page
<img width="1920" height="1080" alt="Screenshot (305)" src="https://github.com/user-attachments/assets/79e3b4f8-3a6a-4ec5-abe8-7d38f70ebb78" />

### 🔍 GPT Search

<img width="1920" height="1080" alt="Screenshot (307)" src="https://github.com/user-attachments/assets/978afd5f-49fb-4072-b17a-201b5c6dc92f" />

### 📽️ SignIn / SignUp page
<img width="1920" height="1080" alt="Screenshot (303)" src="https://github.com/user-attachments/assets/9be7b391-6ca6-4b35-87b1-ff2193df7679" /> <img width="1920" height="1080" alt="Screenshot (301)" src="https://github.com/user-attachments/assets/b4d0866d-51e9-4642-8088-b9cef26b1473" />


---

## ✨ Features
- 🎥 **Browse Movies** — Now Playing, Popular, Top Rated, Upcoming movies
- 🧠 **GPT Search** — AI-powered movie search using Groq API
- 🎞 **Trailers** — Watch movie trailers directly
- 📱 **Responsive UI** — Works on desktop and mobile
- 🔒 **Secure API Key Handling** — Keys stored in `.env` (not committed to repo)

---

## 🛠 Tech Stack
- **Frontend:** React, Redux Toolkit, Tailwind CSS
- **AI Integration:** Groq API
- **Movie Data:** TMDB API
---

## 📦 Installation

# Clone the repository
git clone https://github.com/YOUR_USERNAME/Netflix-GPT.git
cd Netflix-GPT

# Install dependencies
npm install

# Create .env file in root
echo "REACT_APP_TMDB_KEY=YOUR_TMDB_KEY" >> .env
echo "REACT_APP_GROQ_API_KEY=YOUR_GROQ_KEY" >> .env

# Start the development server
npm start

