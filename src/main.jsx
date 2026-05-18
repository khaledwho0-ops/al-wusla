import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("❌ Fatal: Root element not found!");
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <Router>
          <App />
        </Router>
      </StrictMode>
    );
    console.log("🚀 App Rendered Successfully");
  } catch (error) {
    console.error("🔥 App Crashed during render:", error);
    rootElement.innerHTML = `
      <div style="padding: 20px; color: white; background: #800; font-family: monospace;">
        <h1>🔥 APP CRASHED</h1>
        <pre>${error.stack || error.message}</pre>
        <button onclick="localStorage.clear();location.reload()">RESET DATA</button>
      </div>
    `;
  }
}
