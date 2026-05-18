import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { healthData } from '../data/healthGuideData';
import Navigation from '../components/Navigation';
import './HealthGuide.css';

const HealthGuide = () => {
    const { settings } = useAppStore();
    const [activeSection, setActiveSection] = useState('fastingProtocol');
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleItem = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <div className="health-guide-page app-container">
            <header className="guide-header">
                <h1 className="divine-name">
                    {settings.language === 'ar' ? 'الطب النبوي والمعاصر' : 'Health & Fiqh Guide'}
                </h1>
            </header>

            <div className="guide-tabs">
                <button className={`tab ${activeSection === 'fastingProtocol' ? 'active' : ''}`} onClick={() => setActiveSection('fastingProtocol')}>🧬 الصيام</button>
                <button className={`tab ${activeSection === 'athleteProtocol' ? 'active' : ''}`} onClick={() => setActiveSection('athleteProtocol')}>🏋️ الرياضة</button>
                <button className={`tab ${activeSection === 'fatwas' ? 'active' : ''}`} onClick={() => setActiveSection('fatwas')}>📜 الفتاوى</button>
            </div>

            <div className="guide-content">
                {activeSection === 'fastingProtocol' && (
                    <div className="protocol-section">
                        <h2>{healthData.fastingProtocol.title[settings.language]}</h2>
                        {healthData.fastingProtocol.sections.map((sec) => (
                            <div key={sec.id} className="info-card">
                                <h3>{sec.title[settings.language]}</h3>
                                {sec.content && <p>{sec.content[settings.language]}</p>}
                                {sec.steps && (
                                    <ul className="steps-list">
                                        {sec.steps.map((step, idx) => (
                                            <li key={idx}>
                                                <strong>{step.title[settings.language]}</strong>
                                                <p>{step.desc[settings.language]}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {activeSection === 'athleteProtocol' && (
                    <div className="protocol-section">
                        <h2>{healthData.athleteProtocol.title[settings.language]}</h2>
                        <div className="timeline">
                            {healthData.athleteProtocol.schedule.map((slot, idx) => (
                                <div key={idx} className="timeline-item">
                                    <div className="time">{slot.time}</div>
                                    <div className="activity">{slot.activity[settings.language]}</div>
                                </div>
                            ))}
                        </div>
                        <div className="warning-box">
                            <h3>⚠️ {settings.language === 'ar' ? 'تحذيرات هامة' : 'Critical Warnings'}</h3>
                            <ul>
                                {healthData.athleteProtocol.warnings.map((warn, idx) => (
                                    <li key={idx}>{warn[settings.language]}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {activeSection === 'fatwas' && (
                    <div className="fatwas-list">
                        {healthData.fatwas.map((fatwa) => (
                            <div key={fatwa.id} className="fatwa-card" onClick={() => toggleItem(fatwa.id)}>
                                <div className="fatwa-header">
                                    <span className="question-icon">❓</span>
                                    <h3>{fatwa.question[settings.language]}</h3>
                                    <span className={`strength-badge ${fatwa.strength}`}>
                                        {fatwa.strength === 'consensus' ? 'إجماع' : 'نص قطعي'}
                                    </span>
                                </div>
                                {expandedItem === fatwa.id && (
                                    <div className="fatwa-body">
                                        <p className="answer">{fatwa.answer[settings.language]}</p>
                                        <div className="source">
                                            <span>📚 المصدر: </span>
                                            {fatwa.source[settings.language]}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Navigation />
        </div>
    );
};

export default HealthGuide;
