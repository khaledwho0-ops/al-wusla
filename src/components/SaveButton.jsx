import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { authAPI } from '../services/api';
import './SaveButton.css';

/**
 * 💾 SAVE BUTTON - Phase 12 (FIXED)
 * 
 * A dedicated save button that ACTUALLY saves:
 * 1. Forces Zustand persist to localStorage
 * 2. Syncs to server via API
 * 3. Creates backup with timestamp
 */
const SaveButton = ({ pageName = 'Page' }) => {
    const { user, quranProgress, health, settings, setUser } = useAppStore();
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [lastSaved, setLastSaved] = useState(null);

    const handleSave = async () => {
        if (saving) return;
        setSaving(true);

        try {
            const state = useAppStore.getState();

            // ═══════════════════════════════════════════════════════════════
            // STEP 1: Force Zustand persist by directly writing to localStorage
            // ═══════════════════════════════════════════════════════════════
            const zustandStorage = {
                state: {
                    user: state.user,
                    settings: state.settings,
                    quranProgress: state.quranProgress,
                    health: state.health
                },
                version: 0
            };
            localStorage.setItem('al-wusla-storage', JSON.stringify(zustandStorage));
            console.log('✅ Step 1: Zustand storage updated');

            // ═══════════════════════════════════════════════════════════════
            // STEP 2: Create master backup with full state
            // ═══════════════════════════════════════════════════════════════
            const masterBackup = {
                user: state.user,
                quranProgress: state.quranProgress,
                health: state.health,
                settings: state.settings,
                savedAt: new Date().toISOString(),
                savedFrom: pageName,
                version: Date.now()
            };
            localStorage.setItem('al-wusla-master-backup', JSON.stringify(masterBackup));
            console.log('✅ Step 2: Master backup created');

            // ═══════════════════════════════════════════════════════════════
            // STEP 3: Individual key backups for recovery
            // ═══════════════════════════════════════════════════════════════
            localStorage.setItem('al-wusla-user-backup', JSON.stringify(state.user));
            localStorage.setItem('al-wusla-quran-backup', JSON.stringify(state.quranProgress));
            localStorage.setItem('al-wusla-health-backup', JSON.stringify(state.health));
            localStorage.setItem('al-wusla-settings-backup', JSON.stringify(state.settings));
            console.log('✅ Step 3: Individual backups created');

            // ═══════════════════════════════════════════════════════════════
            // STEP 4: Sync to server (if token exists)
            // ═══════════════════════════════════════════════════════════════
            const token = localStorage.getItem('token');
            if (token && state.user?._id) {
                try {
                    const response = await authAPI.updateProgress({
                        hasanat: state.user.hasanat || 0,
                        streaks: state.user.streaks || {},
                        quranProgress: state.quranProgress,
                        health: state.health
                    });

                    if (response && response.user) {
                        // Update local with server response (merged)
                        const mergedUser = {
                            ...state.user,
                            ...response.user,
                            hasanat: Math.max(state.user.hasanat || 0, response.user.hasanat || 0)
                        };
                        setUser(mergedUser);
                        console.log('✅ Step 4: Server sync successful');
                    }
                } catch (apiError) {
                    console.warn('⚠️ Server sync failed (offline mode):', apiError.message);
                    // Still show success - data is saved locally
                }
            }

            // ═══════════════════════════════════════════════════════════════
            // STEP 5: Visual feedback
            // ═══════════════════════════════════════════════════════════════
            setSaved(true);
            setLastSaved(new Date());

            console.log(`💾 SAVE COMPLETE from ${pageName}:`, {
                hasanat: state.user?.hasanat,
                quranPage: state.quranProgress?.currentPage,
                savedAt: new Date().toISOString()
            });

            // Reset saved state after 3 seconds
            setTimeout(() => setSaved(false), 3000);

        } catch (error) {
            console.error('❌ Save failed:', error);
            alert('فشل الحفظ! حاول مرة أخرى\nSave failed! Try again');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="save-button-container">
            <button
                className={`save-button ${saving ? 'saving' : ''} ${saved ? 'saved' : ''}`}
                onClick={handleSave}
                disabled={saving}
            >
                {saving ? (
                    <>
                        <span className="save-spinner">⏳</span>
                        <span>جاري الحفظ...</span>
                    </>
                ) : saved ? (
                    <>
                        <span className="save-icon">✅</span>
                        <span>تم الحفظ!</span>
                    </>
                ) : (
                    <>
                        <span className="save-icon">💾</span>
                        <span>حفظ التقدم</span>
                    </>
                )}
            </button>
            {lastSaved && (
                <span className="last-saved-time">
                    آخر حفظ: {lastSaved.toLocaleTimeString('ar-EG')}
                </span>
            )}
        </div>
    );
};

export default SaveButton;
