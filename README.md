# 🕉️ The Divine Gita

A beautifully crafted, interactive digital sanctuary exploring the sacred teachings of the Bhagavad Gita. This project brings timeless spiritual wisdom into a modern, accessible, and AI-enhanced web experience.

[🌟 **View Live Demo**](https://6a6782c0f0a3058672bbcbe8--coruscating-piroshki-725bd8.netlify.app/)

---

## ✨ Key Features

- **Chapter Exploration**: Browse all 18 chapters with detailed summaries, themes, and spiritual insights.
- **Sacred Verses**: Read individual Shlokas complete with Sanskrit text, transliteration, English translation, and profound commentaries.
- **Verse of the Day**: A dynamically selected verse to inspire your daily meditative journey.
- **AI-Powered Guidance**: Interactive spiritual guidance leveraging Google Gemini API (`@google/genai`) for deeper philosophical explanations.
- **Divine Visual Aesthetics**: Rich artwork and visual themes representing Lord Krishna, Arjuna, and the universal forms.
- **Fluid Animations**: Smooth page transitions and interactive elements powered by Framer Motion.
- **Fully Responsive**: Optimized UI delivering a seamless experience across mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React 19 with TypeScript and Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Backend / AI**: Express.js server integration with Google GenAI SDK (`@google/genai`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/DivineGita.git
   cd DivineGita
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add any required API configuration keys (such as your Google Gemini API key if using server-side AI features):
   ```env
   PORT=3000
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```text
├── server.js               # Express server configuration
├── metadata.json           # App capabilities & metadata configuration
├── package.json            # Project dependencies & scripts
├── src/
│   ├── App.tsx             # Root component with routing and transitions
│   ├── components/         # Reusable UI components (Navbar, Footer, etc.)
│   └── pages/              # Page views (Home, Chapters, ChapterView, About, Contact)
```

---

## 📜 Acknowledgements

This project was developed as part of the internship assignment for the **Inamigos Foundation**.

## 📄 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.
