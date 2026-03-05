import { useEffect, useRef } from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';


export default function Hero({ data }) {
    const canvasRef = useRef(null);

    // Particle background
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.3;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < 80; i++) particles.push(new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(108, 99, 255, ${0.06 * (1 - dist / 120)})`;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    if (!data) return null;

    return (
        <section id="hero" className="hero">
            <canvas ref={canvasRef} className="hero-canvas" />

            {/* Decorative orbs */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-orb hero-orb-3" />

            <div className="hero-content container">
                <div className="hero-text">
                    <p className="hero-greeting">
                        <span className="greeting-wave">👋</span> Hello, I'm
                    </p>
                    <h1 className="hero-name">{data.name}</h1>
                    <div className="hero-title-wrapper">
                        <span className="hero-title-line" />
                        <h2 className="hero-title">{data.title}</h2>
                    </div>
                    <p className="hero-desc">
                        {data.university} &bull; {data.branch}
                    </p>

                    <div className="hero-stats">
                        {data.stats?.map((stat, i) => (
                            <div key={i} className="hero-stat">
                                <span className="hero-stat-value">{stat.value}</span>
                                <span className="hero-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <a href="#projects" className="gradient-btn">
                            View Projects <span>→</span>
                        </a>
                        <a href="#contact" className="outline-btn">
                            Let's Talk <span>💬</span>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-avatar-ring">
                        <div className="hero-avatar-glow" />
                        <img
                            src={data.avatarUrl === '/profile.jpg' ? profileImg : data.avatarUrl}
                            alt={data.name}
                            className="hero-avatar"
                        />
                    </div>
                    <div className="hero-badge hero-badge-1">⚡ Problem Solver</div>
                    <div className="hero-badge hero-badge-2">🚀 Full Stack</div>
                    <div className="hero-badge hero-badge-3">🧠 ML Enthusiast</div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span className="scroll-text">Scroll Down</span>
                <span className="scroll-arrow">↓</span>
            </div>
        </section>
    );
}
