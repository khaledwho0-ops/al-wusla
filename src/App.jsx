
import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import { useAppStore } from './store/useAppStore';
import { authAPI } from './services/api';
import { GuardMaster } from './utils/GuardMaster';

// Auth pages
import Login from './pages/Login';
import Register from './pages/Register';

// Main app components
import Navigation from './components/Navigation';
import QuranReader from './pages/QuranReader';
import HasanatSimulator from './pages/HasanatSimulator';
import PrayerTimes from './pages/PrayerTimes';
import HealthDashboard from './pages/HealthDashboard';
import Competition from './pages/Competition';
import Groups from './pages/Groups';
import History from './pages/History';
import HadithPage from './pages/HadithPage';
import AngelDevil from './components/AngelDevil';
import ZakatCalculator from './components/ZakatCalculator';
import TasbihCounter from './components/TasbihCounter';
import DuaCollection from './components/DuaCollection';
import AsmaAlHusna from './components/AsmaAlHusna';
import QiblaCompass from './components/QiblaCompass';
import FastingTracker from './components/FastingTracker';
import IslamicCalendar from './components/IslamicCalendar';
import SadaqahTracker from './components/SadaqahTracker';
import DailyHadith from './components/DailyHadith';
import RamadanPlanner from './components/RamadanPlanner';
import Badges from './components/Badges';
import ProgressDashboard from './components/ProgressDashboard';
import Settings from './pages/Settings';

// NEW MAXX Components (Phase 2)
import AngelDevilBattle from './components/AngelDevilBattle';
import FourthWallBreaks from './components/FourthWallBreaks';
import IslamicHistory from './pages/IslamicHistory';
import GroupChat from './pages/GroupChat';
import ThingsToAvoid from './pages/ThingsToAvoid';
import ShawwalBridge from './pages/ShawwalBridge';
import ViralChallenges from './pages/ViralChallenges';
import CouncilOf40 from './pages/CouncilOf40';
import HabitTracker from './pages/HabitTracker';
import RealMuslim from './pages/RealMuslim';
import YourHeart from './pages/YourHeart';
import DreamJournal from './pages/DreamJournal';
import Welcome from './pages/Welcome';

// Phase 4: Transcendence
import FocusedWorship from './pages/FocusedWorship';
import BarakahOrchard from './pages/BarakahOrchard';
import MizanScale from './pages/MizanScale';

// UX Enhancement Components
import NarratorBubble from './components/NarratorBubble';
import Watermark from './components/Watermark';
import MakerDuaPopup from './components/MakerDuaPopup';
import HasanatMultiplier from './components/HasanatMultiplier';
import SaveButton from './components/SaveButton';

// Phase 13: Library & Health
import BooksLibrary from './pages/BooksLibrary';
import HealthGuide from './pages/HealthGuide';
import RecommendedChannels from './pages/RecommendedChannels';
import HasanatCountdown from './components/HasanatCountdown';

// Protected Route Component - OFFLINE-FIRST for Android & GUEST SUPPORT
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const user = useAppStore.getState().user;
  const isGuest = user?.isGuest || localStorage.getItem('al-wusla-guest-mode') === 'true';

  // Allow access if we have EITHER a token OR a valid persisted user OR Guest Mode
  const isAuthenticated = token || (user && user._id && user._id !== 'temp') || isGuest;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const [theme, setTheme] = useState('taqwa-teal');
  const [language, setLanguage] = useState('ar'); // Arabic first, always
  const [platform, setPlatform] = useState('web');
  const { setUser, user, fetchLeaderboard } = useAppStore();
  const [loading, setLoading] = useState(true);
  const [navVisible, setNavVisible] = useState(true);

  // ESC key to toggle navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setNavVisible(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Load user data on app mount if token exists
  useEffect(() => {
    const loadUserData = async () => {
      const token = localStorage.getItem('token');
      // Always fetch fresh data if token exists to ensure sync across devices/friends
      if (token) {
        try {
          const userData = await authAPI.getCurrentUser();
          if (userData && userData.user) {
            setUser(userData.user);
          }
        } catch (error) {
          console.error('Failed to load user data:', error);
          // Only clear token if it's an Auth error (401), not network error
          if (error.response && error.response.status === 401) {
            localStorage.removeItem('token');
          }
        }
      }
      setLoading(false);
    };

    loadUserData();
  }, []);

  // GUARD MASTER: Startup audit and competition pulse
  useEffect(() => {
    console.log('⚔️ GuardMaster: Initializing guards...');

    // Only start competition pulse if user is authenticated
    const token = localStorage.getItem('token');
    let stopPulse = () => {};
    if (token) {
      stopPulse = GuardMaster.startCompetitionPulse(fetchLeaderboard, 15000);
    }

    // Track this session
    GuardMaster.trackSession();

    return () => {
      stopPulse();
    };
  }, [fetchLeaderboard]);

  useEffect(() => {
    // Set RTL for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

    // Apply theme
    document.documentElement.setAttribute('data-theme', theme);

    // Platform Detection
    import('@capacitor/core').then(({ Capacitor }) => {
      const plat = Capacitor.getPlatform(); // 'web', 'android', 'ios'
      const isElectron = navigator.userAgent.toLowerCase().includes(' electron/');

      // Reset classes first
      document.body.classList.remove('platform-web', 'platform-android', 'platform-ios', 'platform-desktop');

      if (isElectron) {
        setPlatform('desktop');
        document.body.classList.add('platform-desktop');
      } else {
        setPlatform(plat);
        document.body.classList.add(`platform-${plat}`);
      }
    });
  }, [language, theme]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0f766e 0%, #06b6d4 100%)',
        color: 'white',
        fontSize: '24px'
      }}>
        🌙 Loading AL-WUSLA...
      </div>
    );
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />

      {/* Protected Routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className={`app - container ${!navVisible ? 'nav-hidden' : ''} `}>
              {/* Nav Toggle Button */}
              <button
                className="nav-toggle-btn"
                onClick={() => setNavVisible(!navVisible)}
                title="ESC لإخفاء/إظهار القائمة"
              >
                {navVisible ? '✕' : '☰'}
              </button>

              {navVisible && <Navigation language={language} setLanguage={setLanguage} />}

              {/* UX Enhancement Components */}
              <NarratorBubble />
              <Watermark />
              <MakerDuaPopup />
              <HasanatMultiplier />
              <HasanatCountdown />
              <SaveButton pageName="Global" />

              <main className="main-content">
                <Routes>
                  <Route path="/" element={<QuranReader />} />
                  <Route path="/hasanat" element={<HasanatSimulator />} />
                  <Route path="/prayer" element={<PrayerTimes />} />
                  <Route path="/health" element={<HealthDashboard />} />
                  <Route path="/competition" element={<Competition />} />
                  <Route path="/groups" element={<Groups />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/library" element={<HadithPage />} />
                  <Route path="/conscience" element={<AngelDevil />} />
                  <Route path="/zakat" element={<ZakatCalculator />} />
                  <Route path="/tasbih" element={<TasbihCounter />} />
                  <Route path="/duas" element={<DuaCollection />} />
                  <Route path="/names" element={<AsmaAlHusna />} />
                  <Route path="/qibla" element={<QiblaCompass />} />
                  <Route path="/fasting" element={<FastingTracker />} />
                  <Route path="/calendar" element={<IslamicCalendar />} />
                  <Route path="/sadaqah" element={<SadaqahTracker />} />
                  <Route path="/hadith" element={<DailyHadith />} />
                  <Route path="/planner" element={<RamadanPlanner />} />
                  <Route path="/badges" element={<Badges />} />
                  <Route path="/dashboard" element={<ProgressDashboard />} />
                  <Route path="/settings" element={<Settings />} />

                  {/* Phase 13: Library & Health */}
                  <Route path="/books" element={<ProtectedRoute><BooksLibrary /></ProtectedRoute>} />
                  <Route path="/health-guide" element={<ProtectedRoute><HealthGuide /></ProtectedRoute>} />
                  <Route path="/channels" element={<ProtectedRoute><RecommendedChannels /></ProtectedRoute>} />
                  {/* Ensure Login route is explicitly defined if not already handled by ProtectedRoute fallback */}
                  <Route path="/login" element={<Login />} />

                  {/* NEW MAXX Routes */}
                  <Route path="/battle" element={<AngelDevilBattle />} />
                  <Route path="/fourthwall" element={<FourthWallBreaks />} />
                  <Route path="/islamic-history" element={<IslamicHistory />} />
                  <Route path="/chat" element={<GroupChat />} />
                  <Route path="/avoid" element={<ThingsToAvoid />} />
                  <Route path="/shawwal" element={<ShawwalBridge />} />
                  <Route path="/challenges" element={<ViralChallenges />} />
                  <Route path="/council" element={<CouncilOf40 />} />
                  <Route path="/habits" element={<HabitTracker />} />
                  <Route path="/real-muslim" element={<RealMuslim />} />
                  <Route path="/heart" element={<YourHeart />} />
                  <Route path="/dreams" element={<DreamJournal />} />

                  {/* PHASE 4: Transcendence Routes */}
                  <Route path="/cave" element={<FocusedWorship />} />
                  <Route path="/orchard" element={<BarakahOrchard />} />
                  <Route path="/mizan" element={<MizanScale />} />
                </Routes>
              </main>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
