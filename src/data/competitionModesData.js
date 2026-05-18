/**
 * 🏆 COMPETITION MAXX DATA - Phase 12 Expansion
 * 
 * 20 NEW Competition Features for Live Competition Mode
 */

// ═══════════════════════════════════════════════════════════════
// 20 NEW COMPETITION MODE FEATURES
// ═══════════════════════════════════════════════════════════════

export const competitionModes = [
    // === LIVE 1v1 MODES ===
    {
        id: 'live-quran',
        icon: '📖',
        title: { ar: 'سباق القرآن الحي', en: 'Live Quran Race' },
        description: { ar: 'تنافس مباشر: من يكمل صفحات أكثر في 30 دقيقة؟', en: 'Live race: who completes more pages in 30 minutes?' },
        type: 'realtime',
        duration: 30,
        reward: 100
    },
    {
        id: 'live-dhikr',
        icon: '📿',
        title: { ar: 'ماراثون الذكر', en: 'Dhikr Marathon' },
        description: { ar: 'من يسبّح أكثر في 10 دقائق؟', en: 'Who can make more dhikr in 10 minutes?' },
        type: 'realtime',
        duration: 10,
        reward: 50
    },
    {
        id: 'live-dua',
        icon: '🤲',
        title: { ar: 'تحدي الدعاء', en: 'Dua Challenge' },
        description: { ar: 'احفظ أدعية جديدة وتنافس!', en: 'Memorize new duas and compete!' },
        type: 'realtime',
        duration: 15,
        reward: 75
    },

    // === TEAM BATTLES ===
    {
        id: 'team-quran',
        icon: '👥',
        title: { ar: 'معركة الفريق: القرآن', en: 'Team Battle: Quran' },
        description: { ar: 'فريقك ضد فريق آخر - من يختم أكثر؟', en: 'Your team vs another - who completes more?' },
        type: 'team',
        duration: 1440, // 24 hours
        reward: 200
    },
    {
        id: 'team-fajr',
        icon: '🌅',
        title: { ar: 'تحدي الفجر الجماعي', en: 'Team Fajr Challenge' },
        description: { ar: 'أيقظ فريقك لصلاة الفجر!', en: 'Wake your team for Fajr!' },
        type: 'team',
        duration: 10080, // 7 days
        reward: 500
    },
    {
        id: 'team-charity',
        icon: '💰',
        title: { ar: 'سباق الصدقة', en: 'Charity Race' },
        description: { ar: 'أي فريق يتصدق أكثر هذا الأسبوع؟', en: 'Which team donates more this week?' },
        type: 'team',
        duration: 10080,
        reward: 300
    },

    // === SOLO AI CHALLENGES ===
    {
        id: 'ai-imam',
        icon: '🤖',
        title: { ar: 'تحدي الإمام الذكي', en: 'AI Imam Challenge' },
        description: { ar: 'هل تستطيع التغلب على الذكاء الاصطناعي في الحفظ؟', en: 'Can you beat AI in memorization?' },
        type: 'ai',
        difficulty: 'hard',
        reward: 150
    },
    {
        id: 'ai-scholar',
        icon: '📚',
        title: { ar: 'اختبار العالم', en: 'Scholar Quiz' },
        description: { ar: 'أجب على أسئلة فقهية من الذكاء الاصطناعي', en: 'Answer fiqh questions from AI' },
        type: 'ai',
        difficulty: 'medium',
        reward: 100
    },
    {
        id: 'ai-tajweed',
        icon: '🎤',
        title: { ar: 'تحدي التجويد', en: 'Tajweed Challenge' },
        description: { ar: 'اكتشف أخطاء التجويد', en: 'Spot tajweed mistakes' },
        type: 'ai',
        difficulty: 'expert',
        reward: 200
    },

    // === STREAK CHALLENGES ===
    {
        id: 'streak-40',
        icon: '🔥',
        title: { ar: 'سلسلة الأربعين', en: '40-Day Streak' },
        description: { ar: '40 يوماً متواصلة - التحدي الأعظم!', en: '40 consecutive days - the ultimate challenge!' },
        type: 'streak',
        duration: 40,
        reward: 1000
    },
    {
        id: 'streak-ramadan',
        icon: '🌙',
        title: { ar: 'رمضان كامل', en: 'Full Ramadan' },
        description: { ar: 'أكمل كل المهام 30 يوماً', en: 'Complete all tasks for 30 days' },
        type: 'streak',
        duration: 30,
        reward: 2000
    },
    {
        id: 'streak-fajr-21',
        icon: '☀️',
        title: { ar: 'عادة الفجر', en: 'Fajr Habit' },
        description: { ar: '21 فجراً متتالياً = عادة جديدة!', en: '21 Fajrs in a row = new habit!' },
        type: 'streak',
        duration: 21,
        reward: 500
    },

    // === GLOBAL LEADERBOARDS ===
    {
        id: 'global-weekly',
        icon: '🌍',
        title: { ar: 'المتصدر الأسبوعي', en: 'Weekly Champion' },
        description: { ar: 'كن الأول عالمياً هذا الأسبوع!', en: 'Be #1 globally this week!' },
        type: 'leaderboard',
        period: 'weekly',
        reward: 300
    },
    {
        id: 'global-country',
        icon: '🏴',
        title: { ar: 'بطل بلدك', en: 'Country Champion' },
        description: { ar: 'تصدر لوحة الشرف في بلدك!', en: 'Top the leaderboard in your country!' },
        type: 'leaderboard',
        period: 'monthly',
        reward: 500
    },
    {
        id: 'global-age',
        icon: '👶',
        title: { ar: 'بطل الفئة العمرية', en: 'Age Group Champion' },
        description: { ar: 'تنافس مع من في سنك!', en: 'Compete with your age group!' },
        type: 'leaderboard',
        period: 'monthly',
        reward: 200
    },

    // === SPECIAL EVENTS ===
    {
        id: 'laylat-qadr',
        icon: '✨',
        title: { ar: 'ليلة القدر', en: 'Laylat al-Qadr' },
        description: { ar: 'قيام ليالي العشر الأواخر', en: 'Night prayers in last 10 nights' },
        type: 'event',
        reward: 5000
    },
    {
        id: 'jummah-streak',
        icon: '🕌',
        title: { ar: 'سلسلة الجمعة', en: 'Jummah Streak' },
        description: { ar: '4 جمعات متتالية بالتبكير', en: '4 consecutive early Jummahs' },
        type: 'event',
        reward: 400
    },
    {
        id: 'itikaf-virtual',
        icon: '🏕️',
        title: { ar: 'اعتكاف افتراضي', en: 'Virtual Itikaf' },
        description: { ar: 'اعتكف رقمياً مع مجموعتك!', en: 'Digital itikaf with your group!' },
        type: 'event',
        reward: 1500
    },
    {
        id: 'tahajjud-week',
        icon: '🌃',
        title: { ar: 'أسبوع التهجد', en: 'Tahajjud Week' },
        description: { ar: '7 ليالي تهجد متواصلة', en: '7 consecutive tahajjud nights' },
        type: 'event',
        reward: 700
    }
];

// Live progress display colors
export const progressColors = {
    quran: { primary: '#3b82f6', secondary: '#60a5fa' },
    prayer: { primary: '#10b981', secondary: '#34d399' },
    charity: { primary: '#f59e0b', secondary: '#fbbf24' },
    dhikr: { primary: '#8b5cf6', secondary: '#a78bfa' },
    fasting: { primary: '#ec4899', secondary: '#f472b6' }
};

// Team formations
export const teamFormations = [
    { id: 'duo', name: { ar: 'ثنائي', en: 'Duo' }, size: 2, icon: '👫' },
    { id: 'squad', name: { ar: 'فرقة', en: 'Squad' }, size: 5, icon: '👥' },
    { id: 'battalion', name: { ar: 'كتيبة', en: 'Battalion' }, size: 10, icon: '⚔️' },
    { id: 'army', name: { ar: 'جيش', en: 'Army' }, size: 50, icon: '🏰' }
];

// AI Opponent difficulty levels
export const aiDifficultyLevels = [
    { id: 'beginner', name: { ar: 'مبتدئ', en: 'Beginner' }, multiplier: 0.5, icon: '🌱' },
    { id: 'intermediate', name: { ar: 'متوسط', en: 'Intermediate' }, multiplier: 1.0, icon: '📚' },
    { id: 'advanced', name: { ar: 'متقدم', en: 'Advanced' }, multiplier: 1.5, icon: '⭐' },
    { id: 'expert', name: { ar: 'خبير', en: 'Expert' }, multiplier: 2.0, icon: '🎓' },
    { id: 'imam', name: { ar: 'إمام', en: 'Imam' }, multiplier: 3.0, icon: '👳' }
];

export default competitionModes;
