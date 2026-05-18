/**
 * ISLAMIC HISTORY DATA - سجل الأمجاد
 * 25+ Golden Age Figures, Prophets, Scholars, Companions
 * + Recommended Books
 * By K. for Al-Wusla
 */

// ═══════════════════════════════════════════════════════════════
// THE ULTIMATE ROLE MODEL - PROPHET MUHAMMAD ﷺ
// ═══════════════════════════════════════════════════════════════

export const prophetMuhammad = {
    id: 'prophet_muhammad',
    nameAr: 'النبي محمد ﷺ',
    nameEn: 'Prophet Muhammad ﷺ',
    title: { ar: 'خاتم الأنبياء والمرسلين', en: 'The Seal of Prophets' },
    born: '570 CE / عام الفيل',
    died: '632 CE / 11 هجري',
    image: '🕋',
    category: 'prophet',
    importance: 10, // Highest
    description: {
        ar: 'سيد ولد آدم، أرسله الله رحمة للعالمين. قاد البشرية من الظلمات إلى النور.',
        en: 'Master of humanity, sent as mercy to all worlds. Led mankind from darkness to light.'
    },
    keyEvents: [
        { ar: 'نزول الوحي في غار حراء', en: 'Revelation in Cave Hira', year: '610' },
        { ar: 'الهجرة إلى المدينة', en: 'Hijra to Medina', year: '622' },
        { ar: 'غزوة بدر الكبرى', en: 'Battle of Badr', year: '624' },
        { ar: 'فتح مكة', en: 'Conquest of Mecca', year: '630' },
        { ar: 'حجة الوداع', en: 'Farewell Pilgrimage', year: '632' }
    ],
    qualities: [
        { ar: 'الصدق', en: 'Truthfulness' },
        { ar: 'الأمانة', en: 'Trustworthiness' },
        { ar: 'الرحمة', en: 'Mercy' },
        { ar: 'الشجاعة', en: 'Courage' },
        { ar: 'التواضع', en: 'Humility' }
    ],
    lessons: [
        { ar: 'الإحسان في كل شيء', en: 'Excellence in everything' },
        { ar: 'الصبر على البلاء', en: 'Patience in hardship' },
        { ar: 'العفو عند المقدرة', en: 'Forgiveness when able' }
    ]
};

// ═══════════════════════════════════════════════════════════════
// PROPHETS - الأنبياء عليهم السلام
// ═══════════════════════════════════════════════════════════════

export const prophets = [
    {
        id: 'adam',
        nameAr: 'آدم عليه السلام',
        nameEn: 'Adam (AS)',
        title: { ar: 'أبو البشر', en: 'Father of Humanity' },
        image: '🌍',
        category: 'prophet',
        keyStory: { ar: 'خُلق من طين، أسكنه الله الجنة ثم أهبطه للأرض', en: 'Created from clay, placed in Paradise then sent to Earth' },
        lesson: { ar: 'التوبة تمحو الخطيئة', en: 'Repentance erases sin' }
    },
    {
        id: 'nuh',
        nameAr: 'نوح عليه السلام',
        nameEn: 'Noah (AS)',
        title: { ar: 'شيخ المرسلين', en: 'Sheikh of Messengers' },
        image: '🚢',
        category: 'prophet',
        keyStory: { ar: 'دعا قومه 950 سنة وبنى السفينة', en: 'Called his people for 950 years, built the Ark' },
        lesson: { ar: 'الصبر الطويل في الدعوة', en: 'Long patience in calling to truth' }
    },
    {
        id: 'ibrahim',
        nameAr: 'إبراهيم عليه السلام',
        nameEn: 'Abraham (AS)',
        title: { ar: 'خليل الرحمن', en: 'Friend of Allah' },
        image: '🔥',
        category: 'prophet',
        keyStory: { ar: 'ألقي في النار فكانت برداً وسلاماً، بنى الكعبة', en: 'Thrown in fire but survived, built the Kaaba' },
        lesson: { ar: 'التوكل الكامل على الله', en: 'Complete trust in Allah' }
    },
    {
        id: 'musa',
        nameAr: 'موسى عليه السلام',
        nameEn: 'Moses (AS)',
        title: { ar: 'كليم الله', en: 'The one who spoke to Allah' },
        image: '🌊',
        category: 'prophet',
        keyStory: { ar: 'شق له البحر وأنزلت عليه التوراة', en: 'Sea parted for him, received the Torah' },
        lesson: { ar: 'المواجهة الشجاعة للطغيان', en: 'Brave confrontation of tyranny' }
    },
    {
        id: 'isa',
        nameAr: 'عيسى عليه السلام',
        nameEn: 'Jesus (AS)',
        title: { ar: 'روح الله وكلمته', en: 'Spirit and Word of Allah' },
        image: '✨',
        category: 'prophet',
        keyStory: { ar: 'ولد من غير أب، أحيا الموتى بإذن الله', en: 'Born without father, raised the dead by Allah\'s permission' },
        lesson: { ar: 'الزهد في الدنيا', en: 'Asceticism in worldly matters' }
    },
    {
        id: 'yusuf',
        nameAr: 'يوسف عليه السلام',
        nameEn: 'Joseph (AS)',
        title: { ar: 'الصديق', en: 'The Truthful' },
        image: '🌙',
        category: 'prophet',
        keyStory: { ar: 'من البئر إلى السجن إلى عزيز مصر', en: 'From well to prison to Minister of Egypt' },
        lesson: { ar: 'العفة والصبر يؤديان للتمكين', en: 'Chastity and patience lead to success' }
    },
    {
        id: 'sulaiman',
        nameAr: 'سليمان عليه السلام',
        nameEn: 'Solomon (AS)',
        title: { ar: 'النبي الملك', en: 'Prophet-King' },
        image: '👑',
        category: 'prophet',
        keyStory: { ar: 'سخر له الجن والريح وعلمه منطق الطير', en: 'Jinn, wind, and bird language given to him' },
        lesson: { ar: 'الحكمة في الحكم', en: 'Wisdom in leadership' }
    },
    {
        id: 'ayub',
        nameAr: 'أيوب عليه السلام',
        nameEn: 'Job (AS)',
        title: { ar: 'الصابر', en: 'The Patient One' },
        image: '💪',
        category: 'prophet',
        keyStory: { ar: 'ابتلي في ماله وولده وجسده فصبر', en: 'Tested in wealth, children, health - remained patient' },
        lesson: { ar: 'الصبر على البلاء', en: 'Patience in calamity' }
    }
];

// ═══════════════════════════════════════════════════════════════
// COMPANIONS - الصحابة رضي الله عنهم
// ═══════════════════════════════════════════════════════════════

export const companions = [
    {
        id: 'abu_bakr',
        nameAr: 'أبو بكر الصديق',
        nameEn: 'Abu Bakr As-Siddiq',
        title: { ar: 'الصديق - أول الخلفاء', en: 'The Truthful - First Caliph' },
        image: '⭐',
        category: 'companion',
        relation: { ar: 'أول من أسلم من الرجال، صاحب الهجرة', en: 'First adult male convert, companion in Hijra' },
        achievement: { ar: 'حروب الردة، جمع القرآن', en: 'Wars of Apostasy, compilation of Quran' },
        quality: { ar: 'الإنفاق الكامل في سبيل الله', en: 'Complete spending in Allah\'s cause' }
    },
    {
        id: 'umar',
        nameAr: 'عمر بن الخطاب',
        nameEn: 'Umar ibn Al-Khattab',
        title: { ar: 'الفاروق', en: 'The Distinguisher' },
        image: '⚔️',
        category: 'companion',
        relation: { ar: 'أعز الله به الإسلام', en: 'Islam was strengthened through him' },
        achievement: { ar: 'فتح القدس وفارس، التقويم الهجري', en: 'Conquered Jerusalem & Persia, Islamic calendar' },
        quality: { ar: 'العدل والحزم', en: 'Justice and firmness' }
    },
    {
        id: 'uthman',
        nameAr: 'عثمان بن عفان',
        nameEn: 'Uthman ibn Affan',
        title: { ar: 'ذو النورين', en: 'Possessor of Two Lights' },
        image: '📖',
        category: 'companion',
        relation: { ar: 'تزوج ابنتي النبي ﷺ', en: 'Married two daughters of Prophet ﷺ' },
        achievement: { ar: 'جمع المصحف الشريف', en: 'Compiled the official Quran' },
        quality: { ar: 'الحياء والكرم', en: 'Modesty and generosity' }
    },
    {
        id: 'ali',
        nameAr: 'علي بن أبي طالب',
        nameEn: 'Ali ibn Abi Talib',
        title: { ar: 'أسد الله الغالب', en: 'The Lion of Allah' },
        image: '🦁',
        category: 'companion',
        relation: { ar: 'ابن عم النبي ﷺ وصهره', en: 'Cousin and son-in-law of Prophet ﷺ' },
        achievement: { ar: 'باب مدينة العلم', en: 'Gate to the city of knowledge' },
        quality: { ar: 'الشجاعة والعلم', en: 'Courage and knowledge' }
    },
    {
        id: 'khadijah',
        nameAr: 'خديجة بنت خويلد',
        nameEn: 'Khadijah bint Khuwaylid',
        title: { ar: 'أم المؤمنين', en: 'Mother of Believers' },
        image: '💎',
        category: 'companion',
        relation: { ar: 'أول من آمن على الإطلاق', en: 'First person to believe' },
        achievement: { ar: 'دعمت الدعوة بمالها ونفسها', en: 'Supported the mission with wealth and self' },
        quality: { ar: 'الوفاء والتضحية', en: 'Loyalty and sacrifice' }
    },
    {
        id: 'bilal',
        nameAr: 'بلال بن رباح',
        nameEn: 'Bilal ibn Rabah',
        title: { ar: 'مؤذن الإسلام', en: 'Caller to Prayer' },
        image: '📢',
        category: 'companion',
        relation: { ar: 'عبد أعتقه أبو بكر', en: 'Slave freed by Abu Bakr' },
        achievement: { ar: 'أول مؤذن في الإسلام', en: 'First muezzin in Islam' },
        quality: { ar: 'الثبات تحت التعذيب: أحد... أحد', en: 'Steadfast under torture: One... One' }
    },
    {
        id: 'khalid',
        nameAr: 'خالد بن الوليد',
        nameEn: 'Khalid ibn Al-Walid',
        title: { ar: 'سيف الله المسلول', en: 'Drawn Sword of Allah' },
        image: '⚔️',
        category: 'companion',
        relation: { ar: 'لم يُهزم في معركة قط', en: 'Never lost a battle' },
        achievement: { ar: 'فتوحات الشام والعراق', en: 'Conquests of Syria and Iraq' },
        quality: { ar: 'العبقرية العسكرية', en: 'Military genius' }
    },
    {
        id: 'salman',
        nameAr: 'سلمان الفارسي',
        nameEn: 'Salman Al-Farisi',
        title: { ar: 'الباحث عن الحقيقة', en: 'Seeker of Truth' },
        image: '🔍',
        category: 'companion',
        relation: { ar: 'سلمان منا أهل البيت', en: 'Salman is from our household' },
        achievement: { ar: 'فكرة الخندق', en: 'Idea of the Trench' },
        quality: { ar: 'البحث الدائم عن الحق', en: 'Constant search for truth' }
    }
];

// ═══════════════════════════════════════════════════════════════
// GOLDEN AGE SCHOLARS - علماء العصر الذهبي
// ═══════════════════════════════════════════════════════════════

export const goldenAgeScholars = [
    {
        id: 'imam_bukhari',
        nameAr: 'الإمام البخاري',
        nameEn: 'Imam Al-Bukhari',
        title: { ar: 'أمير المؤمنين في الحديث', en: 'Commander of Believers in Hadith' },
        lived: '810-870 CE',
        image: '📚',
        category: 'scholar_hadith',
        field: { ar: 'الحديث النبوي', en: 'Prophetic Hadith' },
        work: { ar: 'صحيح البخاري', en: 'Sahih Al-Bukhari' },
        achievement: { ar: 'أصح كتاب بعد القرآن', en: 'Most authentic book after Quran' }
    },
    {
        id: 'imam_muslim',
        nameAr: 'الإمام مسلم',
        nameEn: 'Imam Muslim',
        title: { ar: 'صاحب الصحيح', en: 'Author of The Authentic' },
        lived: '815-875 CE',
        image: '📚',
        category: 'scholar_hadith',
        field: { ar: 'الحديث النبوي', en: 'Prophetic Hadith' },
        work: { ar: 'صحيح مسلم', en: 'Sahih Muslim' },
        achievement: { ar: 'ثاني أصح كتاب بعد البخاري', en: 'Second most authentic after Bukhari' }
    },
    {
        id: 'imam_shafii',
        nameAr: 'الإمام الشافعي',
        nameEn: 'Imam Ash-Shafi\'i',
        title: { ar: 'ناصر السنة', en: 'Defender of Sunnah' },
        lived: '767-820 CE',
        image: '⚖️',
        category: 'scholar_fiqh',
        field: { ar: 'أصول الفقه', en: 'Principles of Jurisprudence' },
        work: { ar: 'الرسالة', en: 'Al-Risala' },
        achievement: { ar: 'مؤسس علم أصول الفقه', en: 'Founded Islamic jurisprudence methodology' }
    },
    {
        id: 'imam_malik',
        nameAr: 'الإمام مالك',
        nameEn: 'Imam Malik',
        title: { ar: 'إمام دار الهجرة', en: 'Imam of Medina' },
        lived: '711-795 CE',
        image: '🕌',
        category: 'scholar_fiqh',
        field: { ar: 'الفقه والحديث', en: 'Jurisprudence and Hadith' },
        work: { ar: 'الموطأ', en: 'Al-Muwatta' },
        achievement: { ar: 'أقدم مدونة حديثية', en: 'Oldest hadith compilation' }
    },
    {
        id: 'imam_ahmad',
        nameAr: 'الإمام أحمد بن حنبل',
        nameEn: 'Imam Ahmad ibn Hanbal',
        title: { ar: 'إمام أهل السنة', en: 'Imam of Sunni Islam' },
        lived: '780-855 CE',
        image: '💪',
        category: 'scholar_hadith',
        field: { ar: 'الحديث والعقيدة', en: 'Hadith and Creed' },
        work: { ar: 'المسند', en: 'The Musnad' },
        achievement: { ar: 'صبر على المحنة في خلق القرآن', en: 'Endured torture for defending Quran\'s nature' }
    },
    {
        id: 'imam_abu_hanifa',
        nameAr: 'الإمام أبو حنيفة',
        nameEn: 'Imam Abu Hanifa',
        title: { ar: 'الإمام الأعظم', en: 'The Greatest Imam' },
        lived: '699-767 CE',
        image: '🧠',
        category: 'scholar_fiqh',
        field: { ar: 'الفقه والقياس', en: 'Jurisprudence and Analogy' },
        work: { ar: 'المذهب الحنفي', en: 'Hanafi School' },
        achievement: { ar: 'أكبر مذهب فقهي انتشاراً', en: 'Most widespread school of thought' }
    },
    {
        id: 'imam_nawawi',
        nameAr: 'الإمام النووي',
        nameEn: 'Imam An-Nawawi',
        title: { ar: 'محيي الدين', en: 'Reviver of Faith' },
        lived: '1233-1277 CE',
        image: '📖',
        category: 'scholar_hadith',
        field: { ar: 'شرح الحديث', en: 'Hadith Commentary' },
        work: { ar: 'رياض الصالحين، الأربعون النووية', en: 'Riyadh As-Salihin, 40 Hadith' },
        achievement: { ar: 'أشهر كتب الأخلاق والآداب', en: 'Most famous ethics books' }
    },
    {
        id: 'ibn_taymiyyah',
        nameAr: 'ابن تيمية',
        nameEn: 'Ibn Taymiyyah',
        title: { ar: 'شيخ الإسلام', en: 'Shaykh of Islam' },
        lived: '1263-1328 CE',
        image: '🔥',
        category: 'scholar_aqeedah',
        field: { ar: 'العقيدة والفتوى', en: 'Creed and Legal Opinions' },
        work: { ar: 'العقيدة الواسطية، الفتاوى', en: 'Wasitiyyah Creed, Fatwas' },
        achievement: { ar: 'المجدد والمجاهد بالقلم والسيف', en: 'Reformer and fighter with pen and sword' }
    },
    {
        id: 'imam_dhahabi',
        nameAr: 'الإمام الذهبي',
        nameEn: 'Imam Adh-Dhahabi',
        title: { ar: 'حافظ العصر', en: 'Hadith Master of His Era' },
        lived: '1274-1348 CE',
        image: '📜',
        category: 'scholar_history',
        field: { ar: 'التاريخ والتراجم', en: 'History and Biography' },
        work: { ar: 'سير أعلام النبلاء', en: 'Lives of Noble Figures' },
        achievement: { ar: 'أعظم موسوعة تراجم', en: 'Greatest biographical encyclopedia' }
    },
    {
        id: 'ibn_kathir',
        nameAr: 'ابن كثير',
        nameEn: 'Ibn Kathir',
        title: { ar: 'الحافظ المفسر', en: 'The Hadith Master Exegete' },
        lived: '1300-1373 CE',
        image: '📖',
        category: 'scholar_tafsir',
        field: { ar: 'التفسير والتاريخ', en: 'Quran Commentary and History' },
        work: { ar: 'تفسير القرآن العظيم، البداية والنهاية', en: 'Tafsir, Beginning and End' },
        achievement: { ar: 'أشهر تفسير بالمأثور', en: 'Most famous tradition-based tafsir' }
    },
    {
        id: 'ibn_qayyim',
        nameAr: 'ابن القيم',
        nameEn: 'Ibn Al-Qayyim',
        title: { ar: 'شمس الدين', en: 'Sun of Religion' },
        lived: '1292-1350 CE',
        image: '❤️',
        category: 'scholar_tazkiyah',
        field: { ar: 'التزكية والروحانيات', en: 'Spiritual Purification' },
        work: { ar: 'مدارج السالكين، زاد المعاد', en: 'Stations of Seekers, Provisions for Hereafter' },
        achievement: { ar: 'أعمق كتب تزكية النفس', en: 'Deepest self-purification books' }
    },
    {
        id: 'al_ghazali',
        nameAr: 'الإمام الغزالي',
        nameEn: 'Imam Al-Ghazali',
        title: { ar: 'حجة الإسلام', en: 'Proof of Islam' },
        lived: '1058-1111 CE',
        image: '🌟',
        category: 'scholar_philosophy',
        field: { ar: 'الفلسفة والتصوف', en: 'Philosophy and Sufism' },
        work: { ar: 'إحياء علوم الدين', en: 'Revival of Religious Sciences' },
        achievement: { ar: 'جمع بين العقل والقلب', en: 'United reason and heart' }
    },
    {
        id: 'ibn_hajar',
        nameAr: 'ابن حجر العسقلاني',
        nameEn: 'Ibn Hajar Al-Asqalani',
        title: { ar: 'أمير المؤمنين في الحديث', en: 'Commander of Believers in Hadith' },
        lived: '1372-1449 CE',
        image: '📚',
        category: 'scholar_hadith',
        field: { ar: 'شرح الحديث', en: 'Hadith Commentary' },
        work: { ar: 'فتح الباري', en: 'Fath Al-Bari' },
        achievement: { ar: 'أعظم شرح لصحيح البخاري في التاريخ', en: 'Greatest commentary on Sahih Bukhari' }
    },
    {
        id: 'al_suyuti',
        nameAr: 'جلال الدين السيوطي',
        nameEn: 'Jalaluddin Al-Suyuti',
        title: { ar: 'ابن الكتب', en: 'Son of Books' },
        lived: '1445-1505 CE',
        image: '✍️',
        category: 'scholar_tafsir',
        field: { ar: 'التفسير والحديث', en: 'Tafsir and Hadith' },
        work: { ar: 'تفسير الجلالين', en: 'Tafsir Al-Jalalayn' },
        achievement: { ar: 'أكثر العلماء تأليفاً (500+ كتاب)', en: 'Most prolific author (500+ books)' }
    },
    {
        id: 'ibn_rajab',
        nameAr: 'ابن رجب الحنبلي',
        nameEn: 'Ibn Rajab Al-Hanbali',
        title: { ar: 'الواعظ البليغ', en: 'The Eloquent Preacher' },
        lived: '1335-1393 CE',
        image: '💎',
        category: 'scholar_hadith',
        field: { ar: 'الحديث والرقائق', en: 'Hadith and Heart Softeners' },
        work: { ar: 'جامع العلوم والحكم', en: 'Collection of Sciences and Wisdom' },
        achievement: { ar: 'شرح الأربعين النووية ببراعة', en: 'Masterful commentary on 40 Hadith' }
    },
    {
        id: 'fakhr_al_razi',
        nameAr: 'فخر الدين الرازي',
        nameEn: 'Fakhruddin Al-Razi',
        title: { ar: 'سلطان المتكلمين', en: 'Sultan of Theologians' },
        lived: '1149-1209 CE',
        image: '🧠',
        category: 'scholar_tafsir',
        field: { ar: 'التفسير والفلسفة', en: 'Tafsir and Philosophy' },
        work: { ar: 'التفسير الكبير', en: 'The Great Commentary' },
        achievement: { ar: 'موسوعة عقلية في تفسير القرآن', en: 'Rational encyclopedia of Quran tafsir' }
    },
    {
        id: 'ibn_qudamah',
        nameAr: 'ابن قدامة المقدسي',
        nameEn: 'Ibn Qudamah',
        title: { ar: 'موفق الدين', en: 'Successful in Religion' },
        lived: '1147-1223 CE',
        image: '⚖️',
        category: 'scholar_fiqh',
        field: { ar: 'الفقه المقارن', en: 'Comparative Fiqh' },
        work: { ar: 'المغني', en: 'Al-Mughni' },
        achievement: { ar: 'أعظم مرجع في الفقه المقارن', en: 'Greatest reference in comparative fiqh' }
    },
    {
        id: 'ibn_hazm',
        nameAr: 'ابن حزم الأندلسي',
        nameEn: 'Ibn Hazm',
        title: { ar: 'البحر', en: 'The Sea (of Knowledge)' },
        lived: '994-1064 CE',
        image: '🌊',
        category: 'scholar_fiqh',
        field: { ar: 'الفقه والأدب', en: 'Fiqh and Literature' },
        work: { ar: 'المحلى', en: 'Al-Muhalla' },
        achievement: { ar: 'رائد المذهب الظاهري والأدب', en: 'Pioneer of Zahiri school and literature' }
    },
    {
        id: 'al_tabari',
        nameAr: 'ابن جرير الطبري',
        nameEn: 'Ibn Jarir Al-Tabari',
        title: { ar: 'شيخ المفسرين', en: 'Sheikh of Exegetes' },
        lived: '839-923 CE',
        image: '📜',
        category: 'scholar_tafsir',
        field: { ar: 'التفسير والتاريخ', en: 'Tafsir and History' },
        work: { ar: 'جامع البيان', en: 'Jami al-Bayan' },
        achievement: { ar: 'المرجع الأول لكل المفسرين', en: 'Primary reference for all tafsir' }
    },
    {
        id: 'al_qurtubi',
        nameAr: 'القرطبي',
        nameEn: 'Al-Qurtubi',
        title: { ar: 'شمس الدين', en: 'Sun of Religion' },
        lived: '1214-1273 CE',
        image: '📖',
        category: 'scholar_tafsir',
        field: { ar: 'التفسير الفقهي', en: 'Legal Tafsir' },
        work: { ar: 'الجامع لأحكام القرآن', en: 'Compiler of Quran Rulings' },
        achievement: { ar: 'أفضل تفسير يركز على الأحكام', en: 'Best tafsir focusing on legal rulings' }
    },
    {
        id: 'hassan_basri',
        nameAr: 'الحسن البصري',
        nameEn: 'Hasan Al-Basri',
        title: { ar: 'سيد التابعين', en: 'Master of Tabi\'un' },
        lived: '642-728 CE',
        image: '🛐',
        category: 'scholar_tazkiyah',
        field: { ar: 'الزهد والوعظ', en: 'Asceticism and Preaching' },
        work: { ar: 'الرسائل', en: 'Treatises' },
        achievement: { ar: 'مؤسس مدرسة الزهاد', en: 'Founder of ascetic school' }
    },
    {
        id: 'rabia_adawiyya',
        nameAr: 'رابعة العدوية',
        nameEn: 'Rabia Al-Adawiyya',
        title: { ar: 'شهيدة العشق الإلهي', en: 'Martyr of Divine Love' },
        lived: '714-801 CE',
        image: '🌹',
        category: 'scholar_tazkiyah',
        field: { ar: 'التصوف والحب الإلهي', en: 'Sufism and Divine Love' },
        work: { ar: 'الأشعار', en: 'Poems' },
        achievement: { ar: 'مفهوم الحب الخالص لله', en: 'Concept of pure love for Allah' }
    }
];

// ═══════════════════════════════════════════════════════════════
// GOLDEN AGE SCIENTISTS - علماء العصر الذهبي (العلوم)
// ═══════════════════════════════════════════════════════════════

export const goldenAgeScientists = [
    {
        id: 'ibn_sina',
        nameAr: 'ابن سينا',
        nameEn: 'Ibn Sina (Avicenna)',
        title: { ar: 'الشيخ الرئيس', en: 'The Chief Master' },
        lived: '980-1037 CE',
        image: '🏥',
        category: 'scientist',
        field: { ar: 'الطب والفلسفة', en: 'Medicine and Philosophy' },
        work: { ar: 'القانون في الطب', en: 'Canon of Medicine' },
        achievement: { ar: 'مرجع طبي لـ500 سنة في أوروبا', en: 'Medical reference for 500 years in Europe' }
    },
    {
        id: 'al_khwarizmi',
        nameAr: 'الخوارزمي',
        nameEn: 'Al-Khwarizmi',
        title: { ar: 'أبو الجبر', en: 'Father of Algebra' },
        lived: '780-850 CE',
        image: '🔢',
        category: 'scientist',
        field: { ar: 'الرياضيات', en: 'Mathematics' },
        work: { ar: 'الجبر والمقابلة', en: 'The Compendious Book on Algebra' },
        achievement: { ar: 'اسم Algorithm مشتق من اسمه', en: 'Algorithm named after him' }
    },
    {
        id: 'ibn_rushd',
        nameAr: 'ابن رشد',
        nameEn: 'Ibn Rushd (Averroes)',
        title: { ar: 'الشارح الأكبر', en: 'The Great Commentator' },
        lived: '1126-1198 CE',
        image: '🧠',
        category: 'scientist',
        field: { ar: 'الفلسفة والطب', en: 'Philosophy and Medicine' },
        work: { ar: 'تهافت التهافت', en: 'Incoherence of Incoherence' },
        achievement: { ar: 'حفظ فلسفة أرسطو لأوروبا', en: 'Preserved Aristotle for Europe' }
    },
    {
        id: 'ibn_haytham',
        nameAr: 'ابن الهيثم',
        nameEn: 'Ibn Al-Haytham',
        title: { ar: 'أبو البصريات', en: 'Father of Optics' },
        lived: '965-1040 CE',
        image: '👁️',
        category: 'scientist',
        field: { ar: 'الفيزياء والبصريات', en: 'Physics and Optics' },
        work: { ar: 'كتاب المناظر', en: 'Book of Optics' },
        achievement: { ar: 'أسس المنهج العلمي التجريبي', en: 'Founded experimental scientific method' }
    },
    {
        id: 'jabir_ibn_hayyan',
        nameAr: 'جابر بن حيان',
        nameEn: 'Jabir ibn Hayyan',
        title: { ar: 'أبو الكيمياء', en: 'Father of Chemistry' },
        lived: '721-815 CE',
        image: '⚗️',
        category: 'scientist',
        field: { ar: 'الكيمياء', en: 'Chemistry' },
        work: { ar: 'أكثر من 300 مؤلف', en: 'Over 300 works' },
        achievement: { ar: 'اكتشف التقطير والتبلور', en: 'Discovered distillation and crystallization' }
    },
    {
        id: 'al_zahrawi',
        nameAr: 'الزهراوي',
        nameEn: 'Al-Zahrawi (Abulcasis)',
        title: { ar: 'أبو الجراحة', en: 'Father of Surgery' },
        lived: '936-1013 CE',
        image: '🔪',
        category: 'scientist',
        field: { ar: 'الجراحة والطب', en: 'Surgery and Medicine' },
        work: { ar: 'التصريف', en: 'Kitab al-Tasrif' },
        achievement: { ar: 'اخترع أكثر من 200 أداة جراحية', en: 'Invented over 200 surgical instruments' }
    },
    {
        id: 'al_biruni',
        nameAr: 'البيــروني',
        nameEn: 'Al-Biruni',
        title: { ar: 'الأستاذ', en: 'The Master' },
        lived: '973-1048 CE',
        image: '🌍',
        category: 'scientist',
        field: { ar: 'الفلك والجغرافيا', en: 'Astronomy and Geography' },
        work: { ar: 'القانون المسعودي', en: 'The Masudic Canon' },
        achievement: { ar: 'حسب محيط الأرض بدقة 99.7%', en: 'Calculated Earth circumference with 99.7% accuracy' }
    },
    {
        id: 'mariam_astrolabi',
        nameAr: 'مريم الأسطرلابي',
        nameEn: 'Mariam Al-Astrulabi',
        title: { ar: 'سيدة الفلك', en: 'Lady of Astronomy' },
        lived: '10th Century',
        image: '⭐',
        category: 'scientist',
        field: { ar: 'الفلك', en: 'Astronomy' },
        work: { ar: 'تطوير الأسطرلاب', en: 'Astrolabe Development' },
        achievement: { ar: 'طورت أسطرلابات معقدة للملاحة', en: 'Developed complex astrolabes for navigation' }
    },
    {
        id: 'al_jazari',
        nameAr: 'الجزري',
        nameEn: 'Al-Jazari',
        title: { ar: 'أبو الروبوتات', en: 'Father of Robotics' },
        lived: '1136-1206 CE',
        image: '⚙️',
        category: 'scientist',
        field: { ar: 'الهندسة الميكانيكية', en: 'Mechanical Engineering' },
        work: { ar: 'الجامع بين العلم والعمل', en: 'Book of Knowledge of Ingenious Mechanical Devices' },
        achievement: { ar: 'اخترع العمود المرفقي (Crankshaft) والروبوتات', en: 'Invented crankshaft and early robots' }
    },
    {
        id: 'ibn_nafis',
        nameAr: 'ابن النفيس',
        nameEn: 'Ibn Al-Nafis',
        title: { ar: 'مكتشف الدورة الدموية', en: 'Discoverer of Circulation' },
        lived: '1213-1288 CE',
        image: '🫀',
        category: 'scientist',
        field: { ar: 'الطب وعلم التشريح', en: 'Medicine and Anatomy' },
        work: { ar: 'شرح تشريح القانون', en: 'Commentary on Anatomy in Canon' },
        achievement: { ar: 'اكتشف الدورة الدموية الصغرى قبل هارفي بـ400 سنة', en: 'Discovered pulmonary circulation 400 years before Harvey' }
    },
    {
        id: 'al_kindi',
        nameAr: 'الكندي',
        nameEn: 'Al-Kindi',
        title: { ar: 'فيلسوف العرب', en: 'Philosopher of the Arabs' },
        lived: '801-873 CE',
        image: '🎼',
        category: 'scientist',
        field: { ar: 'التشفير والموسيقى', en: 'Cryptography and Music' },
        work: { ar: 'رسالة في استخراج المعمى', en: 'Manuscript on Deciphering Cryptographic Messages' },
        achievement: { ar: 'مؤسس علم تحليل الشفرات', en: 'Founder of cryptanalysis' }
    },
    {
        id: 'al_battani',
        nameAr: 'البتاني',
        nameEn: 'Al-Battani (Albatenius)',
        title: { ar: 'بطليموس العرب', en: 'Ptolemy of the Arabs' },
        lived: '858-929 CE',
        image: '🔭',
        category: 'scientist',
        field: { ar: 'الرياضيات والفلك', en: 'Math and Astronomy' },
        work: { ar: 'الزيج الصابئ', en: 'Kitab az-Zij' },
        achievement: { ar: 'حسب السنة الشمسية بدقة مذهلة', en: 'Calculated solar year with amazing accuracy' }
    },
    {
        id: 'al_idrisi',
        nameAr: 'الإدريسي',
        nameEn: 'Al-Idrisi',
        title: { ar: 'راسم العالم', en: 'World Map Maker' },
        lived: '1100-1165 CE',
        image: '🗺️',
        category: 'scientist',
        field: { ar: 'الجغرافيا', en: 'Geography' },
        work: { ar: 'نزهة المشتاق', en: 'Tabula Rogeriana' },
        achievement: { ar: 'رسم أدق خريطة للعالم في وقته', en: 'Drew most accurate world map of his time' }
    },
    {
        id: 'fatima_al_fihri',
        nameAr: 'فاطمة الفهرية',
        nameEn: 'Fatima Al-Fihri',
        title: { ar: 'مؤسسة الجامعات', en: 'Mother of Universities' },
        lived: '800-880 CE',
        image: '🏫',
        category: 'scientist',
        field: { ar: 'التعليم', en: 'Education' },
        work: { ar: 'جامعة القرويين', en: 'University of Al-Qarawiyyin' },
        achievement: { ar: 'أسست أول جامعة في العالم لا تزال تعمل', en: 'Founded world\'s oldest existing university' }
    },
    {
        id: 'abbas_ibn_firnas',
        nameAr: 'عباس بن فرناس',
        nameEn: 'Abbas ibn Firnas',
        title: { ar: 'حكيم الأندلس', en: 'Sage of Andalusia' },
        lived: '810-887 CE',
        image: '🦅',
        category: 'scientist',
        field: { ar: 'الطيران والمخترعات', en: 'Aviation and Inventions' },
        work: { ar: 'محاولة الطيران', en: 'Attempt at Flight' },
        achievement: { ar: 'أول محاولة طيران بشري وساعة مائية', en: 'First human flight attempt and water clock' }
    }
];

// ═══════════════════════════════════════════════════════════════
// RECOMMENDED BOOKS - الكتب الموصى بها
// ═══════════════════════════════════════════════════════════════

export const recommendedBooks = {
    prophets: [
        {
            id: 'qasas_anbiya',
            titleAr: 'قصص الأنبياء',
            titleEn: 'Stories of the Prophets',
            author: { ar: 'الحافظ ابن كثير', en: 'Ibn Kathir' },
            description: { ar: 'أدق كتاب في قصص الأنبياء، يعتمد على القرآن والسنة', en: 'Most accurate, based on Quran & Sunnah' },
            level: 'beginner',
            rating: 5
        },
        {
            id: 'nabuwwa_anbiya',
            titleAr: 'النبوة والأنبياء',
            titleEn: 'Prophecy and Prophets',
            author: { ar: 'محمد علي الصابوني', en: 'Muhammad Ali As-Sabuni' },
            description: { ar: 'أسلوب سهل ومعاصر', en: 'Easy contemporary style' },
            level: 'beginner',
            rating: 4
        }
    ],
    companions: [
        {
            id: 'suwar_sahaba',
            titleAr: 'صور من حياة الصحابة',
            titleEn: 'Images from Companions\' Lives',
            author: { ar: 'عبد الرحمن رأفت الباشا', en: 'Abdur-Rahman Rafat Al-Basha' },
            description: { ar: 'أسلوب أدبي رائع، مواقف مؤثرة جداً - أفضل بداية', en: 'Beautiful literary style, very moving - best to start' },
            level: 'beginner',
            rating: 5
        },
        {
            id: 'rijal_rasool',
            titleAr: 'رجال حول الرسول',
            titleEn: 'Men Around the Messenger',
            author: { ar: 'خالد محمد خالد', en: 'Khalid Muhammad Khalid' },
            description: { ar: 'أسلوب عاطفي ومؤثر', en: 'Emotional and touching style' },
            level: 'beginner',
            rating: 4
        }
    ],
    seerah: [
        {
            id: 'raheeq_makhtoom',
            titleAr: 'الرحيق المختوم',
            titleEn: 'The Sealed Nectar',
            author: { ar: 'صفي الرحمن المباركفوري', en: 'Safiur-Rahman Mubarakpuri' },
            description: { ar: 'أفضل كتاب معاصر في السيرة النبوية، فاز بجائزة رابطة العالم الإسلامي', en: 'Best modern Seerah, won Muslim World League award' },
            level: 'beginner',
            rating: 5
        },
        {
            id: 'fiqh_seerah',
            titleAr: 'فقه السيرة',
            titleEn: 'Understanding the Seerah',
            author: { ar: 'محمد الغزالي', en: 'Muhammad Al-Ghazali' },
            description: { ar: 'استخراج الدروس والعبر من السيرة', en: 'Extracting lessons from Seerah' },
            level: 'intermediate',
            rating: 4
        }
    ],
    scholars: [
        {
            id: 'siyar_alam',
            titleAr: 'سير أعلام النبلاء',
            titleEn: 'Lives of Noble Figures',
            author: { ar: 'الإمام الذهبي', en: 'Imam Adh-Dhahabi' },
            description: { ar: 'الموسوعة العمدة في تراجم العظماء', en: 'Ultimate encyclopedia of great figures' },
            level: 'advanced',
            rating: 5
        },
        {
            id: 'tahdhib_siyar',
            titleAr: 'نزهة الفضلاء تهذيب سير أعلام النبلاء',
            titleEn: 'Abridged Lives of Noble Figures',
            author: { ar: 'محمد حسن عقيل موسى', en: 'Muhammad Hasan Aqeel' },
            description: { ar: 'مختصر مناسب لغير المتخصصين', en: 'Suitable summary for non-specialists' },
            level: 'intermediate',
            rating: 4
        },
        {
            id: 'tarikh_islam',
            titleAr: 'تاريخ الإسلام',
            titleEn: 'History of Islam',
            author: { ar: 'الإمام الذهبي', en: 'Imam Adh-Dhahabi' },
            description: { ar: 'أكبر كتاب تاريخي، مرتب على السنوات', en: 'Largest history book, chronological' },
            level: 'advanced',
            rating: 5
        }
    ],
    hadith: [
        {
            id: 'riyadh_salihin',
            titleAr: 'رياض الصالحين',
            titleEn: 'Gardens of the Righteous',
            author: { ar: 'الإمام النووي', en: 'Imam An-Nawawi' },
            description: { ar: 'أفضل كتاب يجمع بين السنة والأخلاق', en: 'Best book combining Sunnah and ethics' },
            level: 'beginner',
            rating: 5
        },
        {
            id: 'arbain_nawawi',
            titleAr: 'الأربعون النووية',
            titleEn: 'Forty Hadith of Nawawi',
            author: { ar: 'الإمام النووي', en: 'Imam An-Nawawi' },
            description: { ar: '42 حديثاً جامعاً لأصول الدين', en: '42 comprehensive hadith on religious foundations' },
            level: 'beginner',
            rating: 5
        },
        {
            id: 'tadhkirat_huffaz',
            titleAr: 'تذكرة الحفاظ',
            titleEn: 'Memorial of Hadith Masters',
            author: { ar: 'الإمام الذهبي', en: 'Imam Adh-Dhahabi' },
            description: { ar: 'طبقات حفاظ الحديث', en: 'Classes of hadith memorizers' },
            level: 'advanced',
            rating: 4
        }
    ],
    spirituality: [
        {
            id: 'ihya_ulum',
            titleAr: 'إحياء علوم الدين',
            titleEn: 'Revival of Religious Sciences',
            author: { ar: 'الإمام الغزالي', en: 'Imam Al-Ghazali' },
            description: { ar: 'موسوعة في علاج أمراض القلوب', en: 'Encyclopedia on treating heart diseases' },
            level: 'advanced',
            rating: 5
        },
        {
            id: 'madarij_salikin',
            titleAr: 'مدارج السالكين',
            titleEn: 'Stations of Seekers',
            author: { ar: 'ابن القيم', en: 'Ibn Al-Qayyim' },
            description: { ar: 'شرح منازل السائرين، أعمق كتب التزكية', en: 'Deepest purification book' },
            level: 'advanced',
            rating: 5
        },
        {
            id: 'kabair',
            titleAr: 'الكبائر',
            titleEn: 'Major Sins',
            author: { ar: 'الإمام الذهبي', en: 'Imam Adh-Dhahabi' },
            description: { ar: 'كتاب وعظي في الكبائر مع الأدلة', en: 'Admonition on major sins with evidence' },
            level: 'beginner',
            rating: 4
        }
    ]
};

// ═══════════════════════════════════════════════════════════════
// READING PATH - مسار القراءة المقترح
// ═══════════════════════════════════════════════════════════════

export const readingPath = [
    { order: 1, bookId: 'suwar_sahaba', reason: { ar: 'ممتع وسهل - أفضل بداية', en: 'Fun and easy - best start' } },
    { order: 2, bookId: 'raheeq_makhtoom', reason: { ar: 'ضبط أحداث السيرة', en: 'Master Seerah events' } },
    { order: 3, bookId: 'tahdhib_siyar', reason: { ar: 'التعمق في سير العظماء', en: 'Deep dive into great lives' } },
    { order: 4, bookId: 'riyadh_salihin', reason: { ar: 'تطبيق السنة يومياً', en: 'Daily Sunnah application' } },
    { order: 5, bookId: 'qasas_anbiya', reason: { ar: 'قصص الأنبياء بالتفصيل', en: 'Detailed prophet stories' } }
];

// ═══════════════════════════════════════════════════════════════
// RAMADAN EVENTS - أحداث رمضانية تاريخية
// ═══════════════════════════════════════════════════════════════

export const ramadanEvents = [
    {
        day: 17,
        year: '2 هجري / 624 م',
        event: { ar: 'غزوة بدر الكبرى', en: 'Battle of Badr' },
        description: { ar: 'أول انتصار للمسلمين - الفرقان بين الحق والباطل', en: 'First Muslim victory - Criterion between truth and falsehood' },
        icon: '⚔️'
    },
    {
        day: 10,
        year: '10 هجري',
        event: { ar: 'وفاة أم المؤمنين خديجة', en: 'Death of Khadijah' },
        description: { ar: 'عام الحزن - وفاة السند والعون', en: 'Year of Sorrow - loss of support' },
        icon: '💔'
    },
    {
        day: 20,
        year: '8 هجري / 630 م',
        event: { ar: 'فتح مكة', en: 'Conquest of Mecca' },
        description: { ar: 'دخل النبي ﷺ مكة فاتحاً بدون قتال', en: 'Prophet ﷺ entered Mecca as conqueror without fighting' },
        icon: '🏴'
    },
    {
        day: 21,
        year: '40 هجري',
        event: { ar: 'استشهاد علي بن أبي طالب', en: 'Martyrdom of Ali' },
        description: { ar: 'رابع الخلفاء الراشدين', en: 'Fourth Rightly Guided Caliph' },
        icon: '🦁'
    },
    {
        day: 27,
        year: '---',
        event: { ar: 'ليلة القدر (أكثر الأقوال)', en: 'Night of Power (most likely)' },
        description: { ar: 'خير من ألف شهر', en: 'Better than a thousand months' },
        icon: '✨'
    }
];

export default {
    prophetMuhammad,
    prophets,
    companions,
    goldenAgeScholars,
    goldenAgeScientists,
    recommendedBooks,
    readingPath,
    ramadanEvents
};
