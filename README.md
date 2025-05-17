# 📝 Resume Builder Application

A modern full-stack Resume Builder app featuring a React + Vite frontend, Node.js + Express backend, and MongoDB — all containerized with Docker for seamless development and deployment.

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [⚙️ Prerequisites](#-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [🐳 Running with Docker](#-running-with-docker)
- [📂 Project Structure](#-project-structure)
- [🔑 Environment Variables](#-environment-variables)
- [🐞 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## ✨ Features

- ⚛️ Responsive React frontend with Vite for fast development  
- 🔧 RESTful Node.js/Express backend API  
- 🔐 Secure JWT-based user authentication  
- 💾 Data persistence with MongoDB  
- 🐳 Dockerized services for easy setup and portability  
- ⚡ Hot-reloading for rapid development  

---

## 🛠️ Tech Stack

| Layer     | Technology                       |
| --------- | -------------------------------|
| Frontend  | React, Vite, Tailwind CSS, MUI  |
| Backend   | Node.js, Express, MongoDB, Mongoose |
| Container | Docker, Docker Compose           |

---

## ⚙️ Prerequisites

- 🐳 [Docker](https://docs.docker.com/get-docker/) (latest version)  
- ⚙️ [Docker Compose](https://docs.docker.com/compose/install/) (latest version)  

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/yourusername/resume-builder.git
cd resume-builder


Edit .env file to configure secrets (e.g. JWT secret).

🐳 Running with Docker
Build and start all services (frontend, backend, MongoDB) with one command:

bash
Copy
Edit
docker compose up --build
Access the app at:

🌐 Frontend: http://localhost:5173

🔗 Backend API: http://localhost:8000

To stop the app, press Ctrl+C or run:

bash
Copy
Edit
docker compose down

🔑 Environment Variables
Variable	Description	Example
MONGO_URI	MongoDB connection string	mongodb://mongo:27017/resume-builder
JWT_SECRET	Secret key for JWT authentication	your_jwt_secret_here
PORT	Backend server port	8000

Note: Ensure .env file exists before running.

🐞 Troubleshooting
Port conflicts: Change ports in docker-compose.yml if 5173 or 8000 are in use

MongoDB connection errors: Confirm MONGO_URI is mongodb://mongo:27017/resume-builder

Permission issues: Verify Docker has permission to mount volumes

Frontend import errors: Check file paths and case sensitivity on your OS

🤝 Contributing
Contributions welcome! Steps:

Fork the repo

Create a feature branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m 'Add feature'

Push to branch: git push origin feature/YourFeature

Open a Pull Request

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

📬 Contact
Your Name
✉️ mohamedaitlahsen24@gmail.com
🌐 https://medsolux.vercel.app/

Made with ❤️ and 🐳 Docker