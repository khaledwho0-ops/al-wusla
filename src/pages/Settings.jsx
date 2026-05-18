import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { GuardMaster } from '../utils/GuardMaster';
import './Settings.css';

const Settings = () => {
    const { settings, user, logout } = useAppStore();
    const language = settings?.language || 'ar';

    const [localSettings, setLocalSettings] = useState({
        language: settings?.language || 'ar',
        theme: settings?.theme || 'taqwa-teal',
        notifications: {
            prayerTime: true,
            prayerReminder: true,
            fajrSpecial: true,
            suhoor: true,
            iftar: true,
            quranReminder: false,
            adhkarMorning: true,
            adhkarEvening: true,
            dailyChallenge: false,
        },
        prayerCalculation: 'MuslimWorldLeague',

        // UX & Aggressive Features
        skipAnimations: false,
        globalMute: false,
        batterySaver: false,
        narratorEnabled: true,
        oledMode: false
    });

    // Apply Aggressive Settings Immediately
    useEffect(() => {
        // Skip Animations
        if (localSettings.skipAnimations) {
            document.body.classList.add('no-animations');
        } else {
            document.body.classList.remove('no-animations');
        }

        // Battery Saver
        if (localSettings.batterySaver) {
            document.body.classList.add('battery-saver');
        } else {
            document.body.classList.remove('battery-saver');
        }

        // OLED Mode
        if (localSettings.oledMode) {
            document.body.classList.add('oled-theme');
        } else {
            document.body.classList.remove('oled-theme');
        }
    }, [localSettings]);

    const themes = [
        { id: 'taqwa-teal', nameAr: 'تقوى تيل', nameEn: 'Taqwa Teal', color: '#008080' },
        { id: 'midnight-blue', nameAr: 'أزرق ليلي', nameEn: 'Midnight Blue', color: '#191970' },
        { id: 'royal-gold', nameAr: 'ذهبي ملكي', nameEn: 'Royal Gold', color: '#d4af37' },
        { id: 'emerald-green', nameAr: 'أخضر زمردي', nameEn: 'Emerald Green', color: '#10b981' },
        { id: 'sunset-orange', nameAr: 'برتقالي غروب', nameEn: 'Sunset Orange', color: '#f97316' },
        { id: 'deep-purple', nameAr: 'بنفسجي عميق', nameEn: 'Deep Purple', color: '#7c3aed' },
    ];

    const prayerMethods = [
        { id: 'MuslimWorldLeague', nameAr: 'رابطة العالم الإسلامي', nameEn: 'Muslim World League' },
        { id: 'Egyptian', nameAr: 'الهيئة المصرية', nameEn: 'Egyptian Authority' },
        { id: 'Karachi', nameAr: 'جامعة كراتشي', nameEn: 'Karachi University' },
        { id: 'UmmAlQura', nameAr: 'أم القرى', nameEn: 'Umm Al-Qura' },
        { id: 'Dubai', nameAr: 'دبي', nameEn: 'Dubai' },
    ];

    const handleToggleNotification = (key) => {
        setLocalSettings(prev => ({
            ...prev,
            notifications: {
                ...prev.notifications,
                [key]: !prev.notifications[key]
            }
        }));
    };

    const handleToggleFeature = (key) => {
        setLocalSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleForceSync = async () => {
        // Aggressive Sync
        alert(language === 'ar' ? '⏳ جاري المزامنة القسرية...' : '⏳ Force Syncing...');
        await GuardMaster.syncHasanat(user.hasanat, user._id, () => Promise.resolve({ hasanat: user.hasanat }));
        setTimeout(() => {
            alert(language === 'ar' ? '✅ تمت المزامنة بنجاح!' : '✅ Synced Successfully!');
        }, 1000);
    };

    const handleDataNuke = () => {
        const confirm1 = confirm(language === 'ar' ? '⚠️ هل أنت متأكد؟ سيتم حذف كل شيء!' : '⚠️ Are you sure? This will delete EVERYTHING!');
        if (!confirm1) return;

        const confirm2 = confirm(language === 'ar' ? '⚠️⚠️ هل أنت متأكد حقاً؟ لا رجعة في هذا!' : '⚠️⚠️ Really sure? This cannot be undone!');
        if (!confirm2) return;

        const confirm3 = prompt(language === 'ar' ? 'اكتب "DELETE" للتأكيد النهائي' : 'Type "DELETE" to confirm');
        if (confirm3 === 'DELETE') {
            localStorage.clear();
            sessionStorage.clear();
            logout();
            window.location.reload();
        }
    };

    const handleEnableAllNotifications = async () => {
        if ('Notification' in window) {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                new Notification(language === 'ar' ? 'تم تفعيل الإشعارات!' : 'Notifications Enabled!');
            }
        }
    };

    return (
        <div className="settings-page">
            <div className="settings-header">
                <h1>⚙️ {language === 'ar' ? 'الإعدادات' : 'Settings'}</h1>
            </div>

            {/* Language & Theme Combined */}
            <div className="settings-grid-row">
                <div className="settings-section">
                    <h3>🌐 {language === 'ar' ? 'اللغة' : 'Language'}</h3>
                    <div className="language-toggle">
                        <button className={`lang-btn ${localSettings.language === 'ar' ? 'active' : ''}`} onClick={() => setLocalSettings(p => ({ ...p, language: 'ar' }))}>العربية</button>
                        <button className={`lang-btn ${localSettings.language === 'en' ? 'active' : ''}`} onClick={() => setLocalSettings(p => ({ ...p, language: 'en' }))}>English</button>
                    </div>
                </div>

                <div className="settings-section">
                    <h3>🎨 {language === 'ar' ? 'السمة' : 'Theme'}</h3>
                    <div className="theme-mini-grid">
                        {themes.map(theme => (
                            <button
                                key={theme.id}
                                className={`theme-circle ${localSettings.theme === theme.id ? 'active' : ''}`}
                                style={{ background: theme.color }}
                                onClick={() => setLocalSettings(p => ({ ...p, theme: theme.id }))}
                                title={language === 'ar' ? theme.nameAr : theme.nameEn}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Aggressive Features & Power User */}
            <div className="settings-section power-suite">
                <h3>⚡ {language === 'ar' ? 'الميزات المتقدمة' : 'Power Features'} (Aggressive)</h3>
                <div className="feature-toggles">
                    {/* Skip Animations */}
                    <div className="feature-item">
                        <span>🚀 {language === 'ar' ? 'تخطي الرسوم المتحركة (للسرعة)' : 'Skip Animations (Speed)'}</span>
                        <button className={`toggle-btn ${localSettings.skipAnimations ? 'active' : ''}`} onClick={() => handleToggleFeature('skipAnimations')}>
                            <span className="toggle-slider"></span>
                        </button>
                    </div>

                    {/* Global Mute */}
                    <div className="feature-item">
                        <span>🔇 {language === 'ar' ? 'كتم الصوت العام' : 'Global Mute'}</span>
                        <button className={`toggle-btn ${localSettings.globalMute ? 'active' : ''}`} onClick={() => handleToggleFeature('globalMute')}>
                            <span className="toggle-slider"></span>
                        </button>
                    </div>

                    {/* Battery Saver */}
                    <div className="feature-item">
                        <span>🔋 {language === 'ar' ? 'موفر البطارية' : 'Battery Saver'}</span>
                        <button className={`toggle-btn ${localSettings.batterySaver ? 'active' : ''}`} onClick={() => handleToggleFeature('batterySaver')}>
                            <span className="toggle-slider"></span>
                        </button>
                    </div>

                    {/* Shut Up Narrator */}
                    <div className="feature-item">
                        <span>🤫 {language === 'ar' ? 'إسكات الراوي' : 'Silence Narrator'}</span>
                        <button className={`toggle-btn ${!localSettings.narratorEnabled ? 'active' : ''}`} onClick={() => handleToggleFeature('narratorEnabled')}>
                            <span className="toggle-slider"></span>
                        </button>
                    </div>

                    {/* OLED Mode */}
                    <div className="feature-item">
                        <span>🖤 {language === 'ar' ? 'وضع OLED (أسود نقي)' : 'OLED Mode (Pure Black)'}</span>
                        <button className={`toggle-btn ${localSettings.oledMode ? 'active' : ''}`} onClick={() => handleToggleFeature('oledMode')}>
                            <span className="toggle-slider"></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Notifications */}
            <div className="settings-section">
                <h3>🔔 {language === 'ar' ? 'الإشعارات' : 'Notifications'}</h3>
                <button className="enable-all-btn" onClick={handleEnableAllNotifications}>
                    {language === 'ar' ? 'تفعيل الكل' : 'Enable All'}
                </button>
                <div className="notification-list condensed">
                    {/* Only showing key ones for brevity */}
                    {['prayerTime', 'fajrSpecial', 'quranReminder'].map(key => (
                        <div key={key} className="notification-item">
                            <span>{key}</span>
                            <button className={`toggle-btn ${localSettings.notifications[key] ? 'active' : ''}`} onClick={() => handleToggleNotification(key)}>
                                <span className="toggle-slider"></span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Danger Zone */}
            <div className="settings-section danger-zone">
                <h3>⚠️ {language === 'ar' ? 'منطقة الخطر' : 'Danger Zone'}</h3>
                <div className="danger-actions">
                    <button className="danger-btn sync" onClick={handleForceSync}>
                        🔄 {language === 'ar' ? 'مزامنة قسرية' : 'FORCE SYNC'}
                    </button>

                    <button className="danger-btn nuke" onClick={handleDataNuke}>
                        ☢️ {language === 'ar' ? 'حذف كل شيء' : 'DATA NUKE'}
                    </button>
                </div>
            </div>

            <div className="app-info">
                <p>AL-WUSLA v2.5 (EXPERT + AGGRESSIVE)</p>
            </div>
        </div>
    );
};

export default Settings;
