import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-glow" />
            <div className="container footer-inner">
                <div className="footer-brand">
                    <span className="footer-logo">
                        <span style={{ color: 'var(--accent-primary)' }}>&lt;</span>
                        Dk
                        <span style={{ color: 'var(--accent-primary)' }}>/&gt;</span>
                    </span>
                    <p className="footer-tagline">Building the future, one line of code at a time.</p>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copy">© {new Date().getFullYear()} Dineshkumar M. Crafted with ❤️ and React</p>
                    <p className="footer-tech">React + Vite &bull; Flask &bull; Vanilla CSS</p>
                </div>
            </div>
        </footer>
    );
}
