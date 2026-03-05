import { useState } from 'react';
import './Projects.css';

const FILTERS = ['all', 'fullstack', 'frontend', 'ml'];

export default function Projects({ data }) {
    const [activeFilter, setActiveFilter] = useState('all');

    if (!data || data.length === 0) return null;

    const filtered = activeFilter === 'all'
        ? data
        : data.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// Projects</span>
                    <h2 className="section-title">What I've Built</h2>
                    <p className="section-subtitle">A selection of projects I'm proud of</p>
                </div>

                <div className="project-filters">
                    {FILTERS.map(f => (
                        <button
                            key={f}
                            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f === 'all' ? 'All' : f === 'fullstack' ? 'Full Stack' : f === 'frontend' ? 'Frontend' : 'ML / AI'}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filtered.map((project) => (
                        <article key={project.id} className="project-card glass-card animate-in">
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
                                <div className="project-image-overlay">
                                    <a href={project.github} className="project-overlay-btn" target="_blank" rel="noreferrer">
                                        GitHub ↗
                                    </a>
                                    {project.live !== '#' && (
                                        <a href={project.live} className="project-overlay-btn live" target="_blank" rel="noreferrer">
                                            Live ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
