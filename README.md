<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/React_Native-Expo-000020?style=for-the-badge&logo=expo" alt="Expo" />
  <img src="https://img.shields.io/badge/Zustand-State-FF6F00?style=for-the-badge" alt="Zustand" />
  <img src="https://img.shields.io/badge/Capacitor-Android-3880FF?style=for-the-badge&logo=capacitor" alt="Capacitor" />
</p>

<h1 align="center">🌙 Al-Wusla — الوصلة</h1>

<p align="center">
  <strong>The Ultimate Ramadan Companion App</strong><br/>
  <em>Web + Android — Prayer times, Quran, daily tracking, and spiritual growth</em>
</p>

---

## 📖 About

**Al-Wusla (الوصلة)** is a comprehensive Ramadan companion application designed to help Muslims maximize their worship during the holy month. Available as both a **web app** and **Android APK**, it provides prayer time calculations, Quran access, Hadith collections, daily spiritual tracking, and community features.

The name "الوصلة" means "The Connection" — representing the spiritual connection with Allah during Ramadan.

---

> **📌 Project Status:** This project was originally deployed with a Railway backend (free tier), which has since expired. The **frontend runs fully locally** — just `npm install && npm run dev`. Some features that depended on the hosted backend (e.g., group chat, cloud sync) require re-deploying the backend or running it locally. All core features (prayer times, Quran, tracking, Hadith) work offline.

---

## ✨ Features

- 🕌 **Accurate Prayer Times** — Hijri date integration with `adhan` library for precise calculations
- 📖 **Full Quran Access** — Read and track your Quran progress
- 📚 **Hadith Collection** — Daily Hadith with references
- 📊 **Daily Tracking** — Monitor prayers, fasting, Quran reading, and du'a
- 🎯 **Goal Setting** — Set and track spiritual goals for Ramadan
- 🔔 **Push Notifications** — Prayer time reminders via Expo Notifications
- 🌐 **Offline Support** — Works without internet using local storage
- 🎨 **Beautiful UI** — Framer Motion animations with Islamic design themes
- 🎉 **Celebrations** — Confetti animations for milestones and achievements
- 📱 **Cross-Platform** — React (Web) + React Native/Expo (Android APK)

---

## 🛠️ Tech Stack

| Platform | Technologies |
|----------|-------------|
| **Web App** | React, Vite, Zustand, Framer Motion, React Router |
| **Mobile App** | React Native, Expo, Expo SQLite, Expo Notifications |
| **Prayer Times** | adhan (Islamic prayer calculation library) |
| **Dates** | date-fns + hijri-date (Hijri calendar support) |
| **Storage** | localforage (Web), Expo SecureStore + SQLite (Mobile) |
| **State** | Zustand (Web), React Navigation (Mobile) |
| **Animations** | Framer Motion, canvas-confetti, react-confetti |

---

## 🚀 Getting Started

### Web App
```bash
cd al-wusla
npm install
npm run dev
```

### Mobile App (Expo)
```bash
cd alwusla-apk
npm install
npx expo start
```

### Build Android APK
```bash
npx expo build:android
# or with EAS
npx eas build --platform android
```

---

## 📁 Project Structure

```
al-wusla/
├── al-wusla/          # React Web App
│   ├── src/
│   ├── public/
│   └── package.json
├── alwusla-apk/       # React Native / Expo Mobile App
│   ├── src/
│   ├── app.json
│   └── package.json
└── marketing/
    ├── promo.mp4
    └── screenshots/
```

---

<p align="center">
  Built with ❤️ by <strong>Khalid Sayed</strong><br/>
  <em>رمضان كريم 🌙</em>
</p>
