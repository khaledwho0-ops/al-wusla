export const healthData = {
    fastingProtocol: {
        title: { ar: 'البروتوكول العلاجي للصيام', en: 'Bio-Spiritual Fasting Protocol' },
        sections: [
            {
                id: 'diagnosis',
                title: { ar: 'التشخيص البيو-روحي', en: 'Bio-Spiritual Diagnosis' },
                content: {
                    ar: 'مشكلتك ليست الجوع، بل انسحاب الدوبامين. جسدك يدخل مرحلة "الالتهام الذاتي" (تنظيف السموم)، والنفس تقاوم فقدان المتعة الفورية.',
                    en: 'Your issue isn\'t hunger, it\'s dopamine withdrawal. Your body enters "Autophagy" (detox), and your ego resists the loss of instant gratification.'
                }
            },
            {
                id: 'immediate_action',
                title: { ar: 'البروتوكول الفوري (خطوات الآن)', en: 'Immediate Action Protocol' },
                steps: [
                    {
                        title: { ar: 'منعكس الغوص', en: 'Mammalian Dive Reflex' },
                        desc: { ar: 'توضأ بماء بارد جداً وركز على وجهك لخفض الكورتيزول فوراً.', en: 'Splash cold water on your face to significantly lower cortisol.' }
                    },
                    {
                        title: { ar: 'إعادة الصياغة', en: 'Cognitive Reframing' },
                        desc: { ar: 'قل: "هذا الشعور هو دليل على أن جسدي يحرق الدهون وينظف الخلايا الآن".', en: 'Say: "This feeling is proof my body is burning fat and cleaning cells right now."' }
                    },
                    {
                        title: { ar: 'تنفس الصمد', en: 'Samad Breathing' },
                        desc: { ar: 'تنفس 4-4-6 مع ترديد اسم الله "الصمد".', en: 'Breathe 4-4-6 while reciting "Al-Samad".' }
                    }
                ]
            }
        ]
    },
    athleteProtocol: {
        title: { ar: 'بروتوكول الرياضيين (الجيم والقتال)', en: 'Athlete\'s Protocol' },
        schedule: [
            {
                time: '03:30 - 04:00',
                activity: { ar: 'وقود السحور: بروتين بطيء (جبن قريش) + بوتاسيوم (موز/أفوكادو) + ملح.', en: 'Suhoor Fuel: Slow protein (Cottage cheese) + Potassium + Salt.' }
            },
            {
                time: '16:00 - 16:30',
                activity: { ar: 'قيلولة استراتيجية (Power Nap) لشحن الجهاز العصبي.', en: 'Strategic Power Nap to recharge nervous system.' }
            },
            {
                time: '17:00 - 18:00',
                activity: { ar: 'تمرين خفيف (حرق دهون/تيكنيك) - ممنوع الأوزان الثقيلة قبل الإفطار.', en: 'Light Cardio/Technique - NO heavy lifting before Iftar.' }
            },
            {
                time: 'After Taraweeh',
                activity: { ar: 'وقت البناء العضلي: الجيم الثقيل أو الكيك بوكسينغ.', en: 'Muscle Building Time: Heavy Gym or Kickboxing.' }
            }
        ],
        warnings: [
            { ar: 'ممنوع القتال (Sparring) قبل الإفطار لتجنب الفشل الكلوي.', en: 'NO Sparring before Iftar (Kidney risk).' },
            { ar: 'الجفاف + تمرين عنيف = انحلال الربيدات (خطر مميت).', en: 'Dehydration + Heavy Training = Rhabdomyolysis (Deadly).' }
        ]
    },
    fatwas: [
        {
            id: 'inhaler',
            question: { ar: 'هل بخاخة الربو تفطر؟', en: 'Does asthma inhaler break fast?' },
            answer: { ar: 'لا تفطر (عند الجمهور). لأنها غاز يذهب للرئة ولا يصل للمعدة إلا نزر يسير.', en: 'No. It goes to lungs, not stomach.' },
            source: { ar: 'مجمع الفقه الإسلامي', en: 'Islamic Fiqh Academy' },
            strength: 'consensus'
        },
        {
            id: 'iv_fluids',
            question: { ar: 'هل الإبر الوريدية تفطر؟', en: 'Do IV injections break fast?' },
            answer: { ar: 'العلاجية لا تفطر. المغذية (الجلوكوز) تفطر.', en: 'Therapeutic: No. Nutritious (Glucose): Yes.' },
            source: { ar: 'دور الإفتاء الكبرى', en: 'Major Fatwa Houses' },
            strength: 'consensus'
        },
        {
            id: 'forget',
            question: { ar: 'أكلت ناسياً؟', en: 'Ate by mistake?' },
            answer: { ar: 'صيامك صحيح 100% ولا قضاء عليك.', en: 'Fast is 100% valid. No makeup needed.' },
            source: { ar: 'حديث نبوي (متفق عليه)', en: 'Hadith (Agreed Upon)' },
            strength: 'certainty' // نص قطعي
        }
    ]
};
