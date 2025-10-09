# Code Explain 📖

**Code Explain** is a powerful, AI-driven web application designed to help you understand complex code snippets in simple, human-readable language.  
Paste your code, select the programming language, and get a clear, detailed explanation of what it does, how it works, and the purpose of its main components.

> *(Note: You would typically place a screenshot URL or preview GIF here.)*

---

## ✨ Features

- **AI-Powered Explanations:** Leverages powerful language models via [OpenRouter.ai](https://openrouter.ai/) to provide high-quality code explanations.  
- **Multi-Language Support:** Easily explain code in popular languages like JavaScript, Python, Java, and more.  
- **Modern Tech Stack:** Built with a robust backend using Node.js & Express and a dynamic frontend with React 19.  
- **Secure & Scalable:** Includes essential security middleware (Helmet), rate limiting to prevent abuse, and CORS configuration.  
- **Asynchronous Operations:** Uses React 19's `useActionState` for a seamless, non-blocking user experience with clear loading and error states.  
- **Easy to Deploy:** Can be quickly set up and run locally or deployed to your favorite cloud provider.

---

## 🛠️ Tech Stack

### **Backend**
- **Node.js:** JavaScript runtime environment.  
- **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.  
- **OpenRouter AI:** Unified API to access various large language models.  
- **Axios:** Promise-based HTTP client for making API requests.  
- **Helmet:** Helps secure Express apps by setting various HTTP headers.  
- **express-rate-limit:** Basic rate-limiting middleware for Express.  
- **dotenv:** Loads environment variables from a `.env` file.

### **Frontend**
- **React 19:** JavaScript library for building user interfaces.  
- **React Server Actions:** Simplifies form handling and data mutations without manual API fetching.  
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.

---

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### **Prerequisites**
- **Node.js** (v18 or newer recommended)  
- **npm** (comes with Node.js)  
- **API key** from [OpenRouter.ai](https://openrouter.ai/keys)

---

### **Installation & Setup**

#### 1. Clone the Repository
```bash
git clone https://github.com/YuvrajBhardwaj/code-explain.git
cd code-explain
```

#### 2. Set up the Backend
Navigate to the backend directory and install the required npm packages.
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory and add your OpenRouter API key:
```bash
# Get your key from https://openrouter.ai/keys
OPENROUTER_API_KEY="sk-or-your-key-here"

# The URL of your frontend application
FRONTEND_URL="http://localhost:3000"
```

#### 3. Set up the Frontend
In a new terminal, navigate to the frontend directory and install the packages.
```bash
cd frontend
npm install
```

---

## 🖥️ Running the Application

### **1. Start the Backend Server**
From the backend directory, run:
```bash
npm start
```
The server will start on **http://localhost:8080** (or your configured port).

### **2. Start the Frontend Development Server**
From the frontend directory, run:
```bash
npm start
```
The React application will open in your browser, typically at **http://localhost:3000**.

You can now use the application by pasting code into the text area and clicking **“Explain Code”!**

---

## 💡 How to Use

1. Open the application in your web browser.  
2. Select the programming language of your code snippet from the dropdown menu.  
3. Paste your code into the text area.  
4. Click the **“Explain Code”** button.  
5. Wait a few moments for the AI to process your request — the explanation will appear below the form.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated!**

1. **Fork** the Project  
2. **Create** your Feature Branch  
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your Changes  
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. **Push** to the Branch  
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 📬 Contact

🔗 **Project Link:** [https://github.com/YuvrajBhardwaj/code-explain](https://github.com/YuvrajBhardwaj/code-explain)
