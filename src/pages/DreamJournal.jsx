
import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import './DreamJournal.css';

const DreamJournal = () => {
    const { user } = useAppStore();
    const [dreamText, setDreamText] = useState('');
    const [dreamType, setDreamType] = useState('good'); // good, bad, confused
    const [showSunnahModal, setShowSunnahModal] = useState(false);

    // Internal state for dreams since we haven't added it to store yet
    // In a real implementation, this would come from the store
    const [localDreams, setLocalDreams] = useState(() => {
        const saved = localStorage.getItem('user_dreams');
        return saved ? JSON.parse(saved) : [];
    });

    const handleSaveDream = () => {
        if (!dreamText.trim()) return;

        const newDream = {
            id: Date.now(),
            text: dreamText,
            type: dreamType,
            date: new Date().toISOString(),
            userId: user?._id || 'temp'
        };

        const updatedDreams = [newDream, ...localDreams];
        setLocalDreams(updatedDreams);
        localStorage.setItem('user_dreams', JSON.stringify(updatedDreams));

        setDreamText('');

        if (dreamType === 'bad') {
            setShowSunnahModal(true);
        }
    };

    const handleDeleteDream = (id) => {
        if (window.confirm('هل أنت متأكد من حذف هذا الحلم؟')) {
            const updated = localDreams.filter(d => d.id !== id);
            setLocalDreams(updated);
            localStorage.setItem('user_dreams', JSON.stringify(updated));
        }
    };

    const formatDate = (isoString) => {
        return new Date(isoString).toLocaleDateString('ar-EG', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'good': return { label: 'رؤيا صالحة 🌙', class: 'good' };
            case 'bad': return { label: 'حلم (من الشيطان) 😈', class: 'bad' };
            case 'confused': return { label: 'أضغاث أحلام 🌫️', class: 'confused' };
            default: return { label: 'حلم', class: 'neutral' };
        }
    };

    return (
        <div className="dream-journal-container">
            <header className="dream-journal-header">
                <h1>رؤياكَ</h1>
                <p>سجّل ما تراه في منامك، واتبع هدي النبي ﷺ في التعامل معه</p>
            </header>

            <div className="dream-input-card">
                <div className="dream-type-selector">
                    <button
                        className={`type-btn good ${dreamType === 'good' ? 'active' : ''}`}
                        onClick={() => setDreamType('good')}
                    >
                        🌙 رؤيا صالحة
                    </button>
                    <button
                        className={`type-btn confused ${dreamType === 'confused' ? 'active' : ''}`}
                        onClick={() => setDreamType('confused')}
                    >
                        🌫️ أضغاث
                    </button>
                    <button
                        className={`type-btn bad ${dreamType === 'bad' ? 'active' : ''}`}
                        onClick={() => setDreamType('bad')}
                    >
                        😈 حلم
                    </button>
                </div>

                <textarea
                    className="dream-textarea"
                    placeholder="ماذا رأيت في منامك؟ (اكتب التفاصيل هنا...)"
                    value={dreamText}
                    onChange={(e) => setDreamText(e.target.value)}
                />

                <button
                    className="save-dream-btn"
                    onClick={handleSaveDream}
                    disabled={!dreamText.trim()}
                >
                    💾 حفظ الرؤيا
                </button>
            </div>

            <div className="dreams-list-section">
                <div className="dreams-list-header">
                    <h3>سجل الأحلام ({localDreams.length})</h3>
                </div>

                {localDreams.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">💤</div>
                        <p>لم تسجل أي أحلام بعد. نوماً هنيئاً!</p>
                    </div>
                ) : (
                    <div className="dreams-grid">
                        {localDreams.map(dream => (
                            <div key={dream.id} className={`dream-card ${dream.type}`}>
                                <div className="dream-meta">
                                    <span className={`dream-type-tag ${dream.type}`}>
                                        {getTypeLabel(dream.type).label}
                                    </span>
                                    <span className="dream-date">{formatDate(dream.date)}</span>
                                </div>
                                <p className="dream-content">{dream.text}</p>
                                <button
                                    className="delete-dream-btn"
                                    onClick={() => handleDeleteDream(dream.id)}
                                    title="حذف"
                                >
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Sunnah Etiquette Modal for Bad Dreams */}
            {showSunnahModal && (
                <div className="sunnah-modal-overlay">
                    <div className="sunnah-modal">
                        <div className="sunnah-icon">🛡️</div>
                        <h2 className="sunnah-title">آداب الحلم السيء</h2>
                        <ul className="sunnah-steps">
                            <li>انفث عن يسارك ثلاث مرات (تفال خفيف)</li>
                            <li>استعذ بالله من الشيطان ومن شر ما رأيت (3 مرات)</li>
                            <li>تحول عن جنبك الذي كنت عليه</li>
                            <li>لا تحدث به أحداً أبداً (فلن يضرك)</li>
                            <li>قم وصلِّ ركعتين إن شئت</li>
                        </ul>
                        <button
                            className="modal-close-btn"
                            onClick={() => setShowSunnahModal(false)}
                        >
                            تم، طبقت السنة ✅
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DreamJournal;
