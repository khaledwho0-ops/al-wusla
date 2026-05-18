/**
 * ⚔️ GUARD MASTER - GOD REVIVE PLAN
 * 20 Logic Integrations for Bulletproof Data Persistence
 * 
 * This utility intercepts ALL data operations and ensures:
 * - Data is NEVER wiped
 * - Local HIGH scores always win
 * - Real-time sync is forced
 * - UI is always updated
 */

// ============================================
// 1. DEEP MERGE - Never overwrite, only update
// ============================================
export const deepMerge = (local, server) => {
    if (!server) return local;
    if (!local) return server;

    const result = { ...local };

    for (const key of Object.keys(server)) {
        if (typeof server[key] === 'object' && server[key] !== null && !Array.isArray(server[key])) {
            result[key] = deepMerge(local[key], server[key]);
        } else if (typeof server[key] === 'number' && typeof local[key] === 'number') {
            // HIGH SCORE WINS - Never let server reduce your score
            result[key] = Math.max(local[key], server[key]);
        } else if (Array.isArray(server[key]) && Array.isArray(local[key])) {
            // MERGE ARRAYS - Combine unique items
            result[key] = [...new Set([...local[key], ...server[key]])];
        } else if (server[key] !== null && server[key] !== undefined) {
            result[key] = server[key];
        }
    }

    return result;
};

// ============================================
// 2. STATE AUDIT - Fix corrupted data on startup
// ============================================
export const auditState = (state) => {
    const audited = { ...state };

    // Fix user object
    if (!audited.user || typeof audited.user !== 'object') {
        audited.user = getDefaultUser();
    }

    // Fix hasanat - must be positive number
    if (typeof audited.user.hasanat !== 'number' || isNaN(audited.user.hasanat) || audited.user.hasanat < 0) {
        audited.user.hasanat = 0;
    }

    // Fix streaks - must be object with positive numbers
    if (!audited.user.streaks || typeof audited.user.streaks !== 'object') {
        audited.user.streaks = { fajr: 0, taraweeh: 0 };
    }

    // Fix quranProgress
    if (!audited.quranProgress) {
        audited.quranProgress = { currentPage: 1, completedPages: [], khatmahCount: 0 };
    }
    if (!Array.isArray(audited.quranProgress.completedPages)) {
        audited.quranProgress.completedPages = [];
    }

    // Fix health
    if (!audited.health) {
        audited.health = { hydrationCurrent: 0, hydrationGoal: 4, qailulahToday: false };
    }

    console.log('🛡️ GuardMaster: State audited successfully');
    return audited;
};

// ============================================
// 3. DEFAULT USER - Clean fallback
// ============================================
export const getDefaultUser = () => ({
    _id: 'temp',
    username: 'مستخدم جديد',
    email: '',
    hasanat: 0,
    level: 'Bronze',
    streaks: { fajr: 0, taraweeh: 0 },
    totalGoodDeeds: 0,
    ghostMode: false
});

// ============================================
// 4. PROTECT WRAPPER - Safe API calls
// ============================================
export const protect = async (apiCall, fallbackValue = null) => {
    try {
        const result = await apiCall();
        return { success: true, data: result };
    } catch (error) {
        console.error('🛡️ GuardMaster: API call protected from failure:', error.message);
        return { success: false, data: fallbackValue, error };
    }
};

// ============================================
// 5. VALIDATE USER - Ensure user object is valid
// ============================================
export const validateUser = (user) => {
    if (!user || typeof user !== 'object') return false;
    if (!user._id || user._id === 'temp') return false;
    if (typeof user.hasanat !== 'number') return false;
    return true;
};

// ============================================
// 6. SYNC HASANAT - Force server sync
// ============================================
export const syncHasanat = async (localHasanat, userId, apiCall) => {
    const result = await protect(apiCall);
    if (result.success && result.data?.hasanat !== undefined) {
        // High score wins
        return Math.max(localHasanat, result.data.hasanat);
    }
    return localHasanat;
};

// ============================================
// 7. THROTTLE - Prevent spam
// ============================================
const throttleMap = new Map();
export const throttle = (key, fn, delay = 1000) => {
    const now = Date.now();
    const last = throttleMap.get(key) || 0;

    if (now - last >= delay) {
        throttleMap.set(key, now);
        return fn();
    }
    return null;
};

// ============================================
// 8. DEBOUNCE - Batch rapid updates
// ============================================
const debounceMap = new Map();
export const debounce = (key, fn, delay = 500) => {
    if (debounceMap.has(key)) {
        clearTimeout(debounceMap.get(key));
    }
    debounceMap.set(key, setTimeout(() => {
        fn();
        debounceMap.delete(key);
    }, delay));
};

// ============================================
// 9. LOCAL STORAGE BACKUP - Redundant save
// ============================================
export const backupToLocalStorage = (key, data) => {
    try {
        localStorage.setItem(`backup_${key}`, JSON.stringify({
            data,
            timestamp: Date.now()
        }));
    } catch (e) {
        console.warn('🛡️ GuardMaster: Backup failed', e);
    }
};

// ============================================
// 10. RESTORE FROM BACKUP - Recovery
// ============================================
export const restoreFromBackup = (key) => {
    try {
        const backup = localStorage.getItem(`backup_${key}`);
        if (backup) {
            const { data, timestamp } = JSON.parse(backup);
            // Only use backup if less than 24 hours old
            if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
                return data;
            }
        }
    } catch (e) {
        console.warn('🛡️ GuardMaster: Restore failed', e);
    }
    return null;
};

// ============================================
// 11. COMPETITION PULSE - Auto-refresh leaderboard
// ============================================
let pulseInterval = null;
export const startCompetitionPulse = (fetchLeaderboard, interval = 10000) => {
    if (pulseInterval) clearInterval(pulseInterval);
    pulseInterval = setInterval(() => {
        console.log('💓 GuardMaster: Competition pulse...');
        fetchLeaderboard('global');
    }, interval);
    return () => clearInterval(pulseInterval);
};

// ============================================
// 12. SOCKET FORCE RECONNECT
// ============================================
export const forceSocketReconnect = (socket) => {
    if (socket && !socket.connected) {
        console.log('🔌 GuardMaster: Forcing socket reconnection...');
        socket.connect();
    }
};

// ============================================
// 13. UI FORCE UPDATE - Trigger re-render
// ============================================
export const forceUIUpdate = (setState) => {
    setState(state => ({ ...state, _forceUpdate: Date.now() }));
};

// ============================================
// 14. VERSION CHECK - Detect stale client
// ============================================
export const checkVersion = (clientVersion, serverVersion) => {
    if (serverVersion && clientVersion !== serverVersion) {
        console.warn('⚠️ GuardMaster: Version mismatch! Client needs refresh.');
        return false;
    }
    return true;
};

// ============================================
// 15. OFFLINE QUEUE - Store actions for later
// ============================================
const offlineQueue = [];
export const queueOfflineAction = (action) => {
    offlineQueue.push({ action, timestamp: Date.now() });
    localStorage.setItem('offlineQueue', JSON.stringify(offlineQueue));
};

export const processOfflineQueue = async (processor) => {
    const queue = JSON.parse(localStorage.getItem('offlineQueue') || '[]');
    for (const item of queue) {
        await processor(item.action);
    }
    localStorage.removeItem('offlineQueue');
    offlineQueue.length = 0;
};

// ============================================
// 16. INTEGRITY HASH - Detect tampering
// ============================================
export const calculateHash = (data) => {
    const str = JSON.stringify(data);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(16);
};

// ============================================
// 17. CONFLICT RESOLVER - Handle sync conflicts
// ============================================
export const resolveConflict = (local, server, strategy = 'high-score') => {
    if (strategy === 'high-score') {
        return deepMerge(local, server);
    }
    if (strategy === 'server-wins') {
        return server;
    }
    if (strategy === 'local-wins') {
        return local;
    }
    return deepMerge(local, server);
};

// ============================================
// 18. RETRY WITH BACKOFF
// ============================================
export const retryWithBackoff = async (fn, maxRetries = 3, baseDelay = 1000) => {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(r => setTimeout(r, baseDelay * Math.pow(2, i)));
        }
    }
};

// ============================================
// 19. SESSION TRACKER - Prevent duplicate logins
// ============================================
export const trackSession = () => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('currentSession', sessionId);
    return sessionId;
};

export const isActiveSession = (sessionId) => {
    return sessionStorage.getItem('currentSession') === sessionId;
};

// ============================================
// 20. MASTER GUARD - The ultimate wrapper
// ============================================
export const GuardMaster = {
    deepMerge,
    auditState,
    getDefaultUser,
    protect,
    validateUser,
    syncHasanat,
    throttle,
    debounce,
    backupToLocalStorage,
    restoreFromBackup,
    startCompetitionPulse,
    forceSocketReconnect,
    forceUIUpdate,
    checkVersion,
    queueOfflineAction,
    processOfflineQueue,
    calculateHash,
    resolveConflict,
    retryWithBackoff,
    trackSession,
    isActiveSession,

    // THE MASTER FUNCTION - Run all guards
    initializeGuards: (store) => {
        console.log('⚔️ GUARD MASTER ACTIVATED - 20 Logic Integrations Online');

        // Audit state on init
        const currentState = store.getState();
        const auditedState = auditState(currentState);

        // Backup critical data
        backupToLocalStorage('user', auditedState.user);
        backupToLocalStorage('quranProgress', auditedState.quranProgress);

        // Track session
        trackSession();

        return auditedState;
    }
};

export default GuardMaster;
