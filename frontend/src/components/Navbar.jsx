import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('hero');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60);

            const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(Boolean);
            let current = 'hero';
            for (const sec of sections) {
                if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
            }
            setActive(current);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner container">
                <button className="nav-logo" onClick={() => scrollTo('hero')}>
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-text">Dk</span>
                    <span className="logo-bracket">/&gt;</span>
                </button>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {NAV_LINKS.map(link => (
                        <button
                            key={link.id}
                            className={`nav-link ${active === link.id ? 'active' : ''}`}
                            onClick={() => scrollTo(link.id)}
                        >
                            {link.label}
                            {active === link.id && <span className="nav-indicator" />}
                        </button>
                    ))}
                </div>

                <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(p => !p)} aria-label="Menu">
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
