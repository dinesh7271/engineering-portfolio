import './Journey.css';

const TYPE_ICONS = {
    education: '🎓',
    experience: '💼',
    achievement: '🏆',
};

const TYPE_COLORS = {
    education: 'var(--accent-primary)',
    experience: 'var(--accent-secondary)',
    achievement: 'var(--accent-tertiary)',
};

export default function Journey({ data }) {
    if (!data || data.length === 0) return null;

    return (
        <section id="journey" className="journey-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// Journey</span>
                    <h2 className="section-title">My Journey</h2>
                    <p className="section-subtitle">Education, experience, and milestones</p>
                </div>

                <div className="timeline">
                    <div className="timeline-line" />
                    {data.map((item, i) => (
                        <div key={item.id} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} animate-in`}>
                            <div className="timeline-dot" style={{ background: TYPE_COLORS[item.type] || 'var(--accent-primary)' }}>
                                <span>{TYPE_ICONS[item.type] || '📌'}</span>
                            </div>
                            <div className="timeline-card glass-card">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-title">{item.degree}</h3>
                                <p className="timeline-institution">{item.institution}</p>
                                <p className="timeline-desc">{item.description}</p>
                                <span className="timeline-type-badge" style={{ borderColor: TYPE_COLORS[item.type] || 'var(--accent-primary)', color: TYPE_COLORS[item.type] || 'var(--accent-primary)' }}>
                                    {item.type}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
