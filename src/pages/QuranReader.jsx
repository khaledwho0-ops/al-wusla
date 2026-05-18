import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../store/useAppStore';
import { GuardMaster } from '../utils/GuardMaster';
import './QuranReader.css';

const TOTAL_PAGES = 604;

const QuranReader = () => {
    const { quranProgress, updateQuranProgress, settings, user } = useAppStore();
    const [currentPage, setCurrentPage] = useState(quranProgress?.currentPage || 1);
    const [explosion, setExplosion] = useState(null);
    const [loading, setLoading] = useState(false);

    // UX Features State
    const [zoomLevel, setZoomLevel] = useState(1);
    const [readingMode, setReadingMode] = useState('normal'); // normal, sepia, night, oled
    const [zenMode, setZenMode] = useState(false);
    const [isFriday, setIsFriday] = useState(false);
    const [hapticsEnabled, setHapticsEnabled] = useState(true);

    // Aggressive Features State
    const [autoScroll, setAutoScroll] = useState(false);
    const [scrollSpeed, setScrollSpeed] = useState(1); // 1 = slow, 5 = fast
    const [focusLocked, setFocusLocked] = useState(false);

    const iframeRef = useRef(null);
    const scrollInterval = useRef(null);

    // Sample Ramadan verses
    const ramadanVerses = [
        { surah: 2, ayah: 183, page: 28, text: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ..." },
        { surah: 2, ayah: 185, page: 28, text: "شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ..." },
        { surah: 97, ayah: 1, page: 598, text: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ" },
    ];

    // Friday Check
    useEffect(() => {
        const today = new Date();
        if (today.getDay() === 5) setIsFriday(true);
    }, []);

    // Keybinds (Aggressive & UX)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (focusLocked && e.key === 'Escape') {
                e.preventDefault(); // Soft lock - try to prevent escape if possible (browser limits this)
                alert(settings.language === 'ar' ? '🚫 وضع التركيز مفعل! (اضغط القفل للخروج)' : '🚫 Focus Locked! (Click lock to exit)');
                return;
            }

            if (e.key === 'ArrowRight') changePage(settings.language === 'ar' ? -1 : 1);
            if (e.key === 'ArrowLeft') changePage(settings.language === 'ar' ? 1 : -1);
            if (e.key === ' ' || e.key === 'Enter') handlePageComplete();
            if (e.key === 'z') setZenMode(prev => !prev);
            if (e.key === 'a') toggleAutoScroll();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentPage, settings.language, focusLocked]);

    // Auto-Scroll Logic
    useEffect(() => {
        if (autoScroll) {
            scrollInterval.current = setInterval(() => {
                // We can't scroll the iframe content directly due to CORS, 
                // but we can simulate progress or scroll the container if it was lengthy.
                // For this iframe implementation, we'll visualy pulse to indicate "Reading Mode Active"
                // Or if we had text content, we'd scroll it. 
                // Since it's an iframe, we will just keep screen awake.
                if (navigator.wakeLock) navigator.wakeLock.request('screen');
            }, 50);
        } else {
            clearInterval(scrollInterval.current);
        }
        return () => clearInterval(scrollInterval.current);
    }, [autoScroll]);

    const vibrate = () => {
        if (hapticsEnabled && navigator.vibrate) navigator.vibrate(50);
    };

    const changePage = (delta) => {
        const newPage = Math.min(604, Math.max(1, currentPage + delta));
        if (newPage !== currentPage) {
            vibrate();
            setCurrentPage(newPage);
        }
    };

    const toggleFocusLock = () => {
        if (!focusLocked) {
            document.documentElement.requestFullscreen().catch(e => console.log(e));
            setZenMode(true);
            setFocusLocked(true);
        } else {
            document.exitFullscreen().catch(e => console.log(e));
            setFocusLocked(false);
        }
    };

    const toggleAutoScroll = () => {
        setAutoScroll(prev => !prev);
        if (!autoScroll) vibrate();
    };

    const handlePageComplete = async () => {
        setLoading(true);
        vibrate(); // Haptic feedback

        // Confetti effect (Aggressive Reward)
        if (window.confetti) {
            window.confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#008080', '#d4af37', '#ffffff']
            });
        }

        try {
            const result = await updateQuranProgress(currentPage);
            setExplosion({
                amount: result?.hasanat || 10,
                multiplier: result?.multiplier || '10x'
            });
            setTimeout(() => setExplosion(null), 3000);
            changePage(1); // Auto next page
        } catch (error) {
            console.error('Error completing page:', error);
            setExplosion({ amount: 10, multiplier: '10x' });
            setTimeout(() => setExplosion(null), 3000);
            changePage(1);
        }
        setLoading(false);
    };

    const completedPages = quranProgress?.completedPages?.length || 0;
    const progress = (completedPages / TOTAL_PAGES) * 100;

    return (
        <div className={`quran-reader ${zenMode ? 'zen-mode' : ''} mode-${readingMode} ${focusLocked ? 'focus-locked' : ''}`}>

            {/* Friday Banner */}
            {isFriday && !zenMode && (
                <div className="friday-banner">
                    🕌 {settings.language === 'ar' ? 'إنه يوم الجمعة! لا تنس سورة الكهف (صفحة 293)' : 'It\'s Friday! Don\'t forget Surah Al-Kahf (Page 293)'}
                    <button onClick={() => setCurrentPage(293)}>{settings.language === 'ar' ? 'الذهاب' : 'Go'}</button>
                </div>
            )}

            {/* Header (Hidden in Zen Mode) */}
            {!zenMode && (
                <div className="quran-header">
                    <div className="header-content">
                        <h1 className="page-title">
                            {settings.language === 'ar' ? 'القرآن الكريم' : 'The Noble Quran'}
                            {user?.ghostMode && <span className="ghost-badge">👻</span>}
                        </h1>

                        {/* UX Controls Toolbar */}
                        <div className="reader-toolbar">
                            <button onClick={() => setZoomLevel(prev => Math.min(prev + 0.1, 1.5))} title="Zoom In">🔍+</button>
                            <button onClick={() => setZoomLevel(prev => Math.max(prev - 0.1, 0.8))} title="Zoom Out">🔍-</button>
                            <button onClick={() => setReadingMode('sepia')} className="mode-btn sepia" title="Sepia">🟤</button>
                            <button onClick={() => setReadingMode('night')} className="mode-btn night" title="Night">🌑</button>
                            <button onClick={() => setReadingMode('oled')} className="mode-btn oled" title="OLED">🖤</button>
                            <button onClick={() => setReadingMode('normal')} className="mode-btn normal" title="Reset">⚪</button>
                            <button onClick={() => setZenMode(true)} title="Zen Mode">👁️</button>
                            <button onClick={toggleFocusLock} className={focusLocked ? 'active' : ''} title="Focus Lock">🔒</button>
                        </div>

                        <div className="progress-display">
                            <div className="progress-stats">
                                <span>{currentPage} / {TOTAL_PAGES}</span>
                                <div>
                                    <button className="quick-nav" onClick={() => setCurrentPage(quranProgress?.currentPage || 1)}>
                                        ↪️ {settings.language === 'ar' ? 'استئناف' : 'Resume'}
                                    </button>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${progress}%` }} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Quran Display Area */}
            <div className="quran-content">
                {/* Floating Zen Controls (Only visible in Zen Mode) */}
                {zenMode && (
                    <div className="zen-controls">
                        <button onClick={() => setZenMode(false)}>✕</button>
                        <button onClick={toggleFocusLock}>{focusLocked ? '🔒' : '🔓'}</button>
                    </div>
                )}

                {/* Main Reading Area */}
                <div
                    className="reading-area"
                    style={{
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: 'top center',
                        transition: 'transform 0.2s ease'
                    }}
                >
                    <div className="page-display">
                        <div className="quran-viewer filter-target">
                            <iframe
                                ref={iframeRef}
                                src={`https://quran.com/page/${currentPage}?embed=true`}
                                title="Quran Page"
                                className={`quran-iframe ${readingMode}`}
                                frameBorder="0"
                                allow="autoplay"
                            />
                        </div>
                    </div>

                    {/* Page Controls */}
                    <div className="page-controls">
                        <button
                            className="btn btn-secondary nav-btn"
                            onClick={() => changePage(-1)}
                            disabled={currentPage === 1}
                        >
                            {settings.language === 'ar' ? '←' : '→'}
                        </button>

                        <button
                            className={`btn btn-primary complete-btn ${autoScroll ? 'scrolling' : ''}`}
                            onClick={handlePageComplete}
                        >
                            {autoScroll ? '🔄 Auto (Speed)' : (settings.language === 'ar' ? '✓ أتممت الصفحة' : '✓ Page Complete')}
                        </button>

                        <button
                            className="btn btn-secondary nav-btn"
                            onClick={() => changePage(1)}
                            disabled={currentPage === 604}
                        >
                            {settings.language === 'ar' ? '→' : '←'}
                        </button>
                    </div>

                    <div className="keyboard-hint">
                        {settings.language === 'ar' ? '[المسافة] للإتمام • [الأسهم] للتنقل • [Z] وضع التركيز' : '[Space] Complete • [Arrows] Nav • [Z] Zen'}
                    </div>
                </div>
            </div>

            {/* Explosion Animation */}
            {explosion && (
                <div className="hasanat-explosion">
                    <div className="explosion-container">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div
                                key={i}
                                className={`particle ${explosion.multiplier === '700x' ? 'wheat' : 'gold'}`}
                                style={{
                                    '--angle': `${(360 / 20) * i}deg`,
                                    '--distance': `${100 + Math.random() * 100}px`,
                                }}
                            />
                        ))}
                        <div className="explosion-text">
                            <div className="multiplier">×{explosion.multiplier}</div>
                            <div className="amount">+{explosion.amount}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuranReader;
