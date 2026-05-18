import { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import './HasanatCounter.css';

const HasanatCountdown = () => {
    const { prayerTimes, settings } = useAppStore();
    const [timeLeft, setTimeLeft] = useState('');
    const [nextPrayer, setNextPrayer] = useState('');
    const [multiplier, setMultiplier] = useState(1);
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            // Basic logic: Higher multiplier near prayer times/Ramadan nights
            // This would be more complex in real app using prayer times
            const hour = now.getHours();
            let currentMult = 10;

            // Night multiplier (Taraweeh/Qiyam)
            if (hour >= 20 || hour < 4) currentMult = 700;
            // Friday multiplier
            if (now.getDay() === 5) currentMult = 70;

            if (currentMult !== multiplier) {
                setMultiplier(currentMult);
                setShowAnimation(true);
                setTimeout(() => setShowAnimation(false), 2000);
            }

            // Mock countdown for demo
            setTimeLeft('03:45:12');
            setNextPrayer('Maghrib');
        };

        const timer = setInterval(calculateTime, 1000);
        return () => clearInterval(timer);
    }, [multiplier]);

    if (!prayerTimes) return null;

    return (
        <div className="hasanat-countdown-widget">
            <div className="next-prayer-info">
                <span className="label">
                    {settings?.language === 'ar' ? 'الوقت المتبقي لـ' : 'Time until'} {nextPrayer}
                </span>
                <span className="timer">{timeLeft}</span>
            </div>

            <div className={`multiplier-badge ${showAnimation ? 'pulse' : ''} x${multiplier}`}>
                <span className="x-icon">×</span>
                <span className="value">{multiplier}</span>
                <span className="text">
                    {multiplier >= 700 ? 'أضعاف كثيرة' : 'Hasanat'}
                </span>
            </div>

            <div className="quran-verse-ticker">
                <div className="ticker-content">
                    {settings?.language === 'ar'
                        ? 'مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ...'
                        : 'The example of those who spend their wealth in the way of Allah is like a seed...'}
                </div>
            </div>
        </div>
    );
};

export default HasanatCountdown;
