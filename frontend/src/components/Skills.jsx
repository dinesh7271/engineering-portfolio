import { useEffect, useRef } from 'react';
import './Skills.css';

function SkillBar({ name, level }) {
    const barRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && barRef.current) {
                    barRef.current.style.width = `${level}%`;
                }
            },
            { threshold: 0.3 }
        );
        if (barRef.current?.parentElement) observer.observe(barRef.current.parentElement);
        return () => observer.disconnect();
    }, [level]);

    return (
        <div className="skill-item">
            <div className="skill-info">
                <span className="skill-name">{name}</span>
                <span className="skill-percent">{level}%</span>
            </div>
            <div className="skill-track">
                <div ref={barRef} className="skill-fill" style={{ width: 0 }} />
            </div>
        </div>
    );
}

export default function Skills({ data }) {
    if (!data || data.length === 0) return null;

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// Skills</span>
                    <h2 className="section-title">My Tech Stack</h2>
                    <p className="section-subtitle">Technologies and tools I work with</p>
                </div>

                <div className="skills-grid">
                    {data.map((cat, i) => (
                        <div key={i} className="skill-card glass-card animate-in" style={{ animationDelay: `${i * 0.15}s` }}>
                            <div className="skill-card-header">
                                <span className="skill-icon">
                                    {cat.icon.startsWith('fa-') ? <i className={cat.icon}></i> : cat.icon}
                                </span>
                                <h3 className="skill-category">{cat.category}</h3>
                            </div>
                            <div className="skill-items">
                                {cat.items.map((item, j) => (
                                    <SkillBar key={j} name={item.name} level={item.level} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
