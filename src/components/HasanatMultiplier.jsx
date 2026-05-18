import { useState, useEffect, useRef } from 'react';
import { useAppStore } from '../store/useAppStore';
import './HasanatMultiplier.css';

const HasanatMultiplier = () => {
    const { user } = useAppStore();
    const prevHasanat = useRef(user?.hasanat || 0);
    const [animations, setAnimations] = useState([]);

    useEffect(() => {
        const currentHasanat = user?.hasanat || 0;
        const diff = currentHasanat - prevHasanat.current;

        if (diff > 0) {
            const id = Date.now();
            // Logic: If diff is 10, it's base. If >10, it implies multiplier.
            // Simple visualizer: Base + Bonus.
            // For now, simple "X10" if the gain is substantial, or just the number.

            const isMultiplier = diff >= 20; // Assuming 10 is base, 20+ means multiplier active

            const newAnim = {
                id,
                amount: diff,
                text: isMultiplier ? `x${diff / 10}` : '+10',
                isMultiplier
            };

            setAnimations(prev => [...prev, newAnim]);

            // Remove after animation
            setTimeout(() => {
                setAnimations(prev => prev.filter(a => a.id !== id));
            }, 2000);
        }

        prevHasanat.current = currentHasanat;
    }, [user?.hasanat]);

    return (
        <div className="multiplier-container">
            {animations.map(anim => (
                <div key={anim.id} className={`multiplier-popup ${anim.isMultiplier ? 'mega' : ''}`}>
                    <span className="amount">+{anim.amount}</span>
                    {anim.isMultiplier && <span className="label">DOUBLE!</span>}
                </div>
            ))}
        </div>
    );
};

export default HasanatMultiplier;
