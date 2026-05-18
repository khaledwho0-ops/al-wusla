import { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { channelsData } from '../data/channelsData';
import Navigation from '../components/Navigation';
import './RecommendedChannels.css';

const RecommendedChannels = () => {
    const { settings } = useAppStore();
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredChannels = activeCategory === 'all'
        ? channelsData.flatMap(cat => cat.items)
        : channelsData.find(cat => cat.id === activeCategory)?.items || [];

    return (
        <div className="channels-page app-container">
            <header className="channels-header">
                <h1 className="divine-name">
                    {settings.language === 'ar' ? 'مجتمعات الوصلة' : 'Al-Wusla Connect'}
                </h1>
                <p>
                    {settings.language === 'ar'
                        ? 'مصادر موثوقة لرحلتك الروحية'
                        : 'Trusted sources for your spiritual journey'}
                </p>
            </header>

            <div className="category-filter">
                <button
                    className={`filter-chip ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('all')}
                >
                    {settings.language === 'ar' ? 'الكل' : 'All'}
                </button>
                {channelsData.map(cat => (
                    <button
                        key={cat.id}
                        className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.title[settings.language]}
                    </button>
                ))}
            </div>

            <div className="channels-grid">
                {filteredChannels.map((channel) => (
                    <a
                        key={channel.id}
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="channel-card"
                    >
                        <div className="channel-icon">{channel.icon}</div>
                        <div className="channel-info">
                            <h3>{channel.title}</h3>
                            <p>{channel.desc}</p>
                        </div>
                        <div className="external-link-icon">↗</div>
                    </a>
                ))}
            </div>

            <div className="community-invite">
                <h3>{settings.language === 'ar' ? 'انضم إلى مجتمع الوصلة' : 'Join Al-Wusla Community'}</h3>
                <p>شارك رحلتك مع آلاف المسلمين حول العالم</p>
                <button className="join-discord-btn">
                    Discord 💬
                </button>
            </div>

            <Navigation />
        </div>
    );
};

export default RecommendedChannels;
