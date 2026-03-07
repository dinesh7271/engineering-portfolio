import './About.css';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Dineshkumar_M_Resume.pdf';


export default function About({ data }) {
    if (!data) return null;

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// About Me</span>
                    <h2 className="section-title">Who I Am</h2>
                    <p className="section-subtitle">Get to know the person behind the code</p>
                </div>

                <div className="about-grid">
                    <div className="about-image-col animate-in">
                        <div className="about-image-frame">
                            <img src={data.avatarUrl === '/profile.jpg' ? profileImg : data.avatarUrl} alt={data.name} className="about-img" />
                            <div className="about-image-decoration" />
                        </div>
                    </div>

                    <div className="about-text-col animate-in">
                        <h3 className="about-name">{data.name}</h3>
                        <p className="about-role">{data.title}</p>
                        <p className="about-bio">{data.bio}</p>

                        <div className="about-details">
                            <div className="about-detail">
                                <span className="detail-icon">🎓</span>
                                <div>
                                    <span className="detail-label">University</span>
                                    <span className="detail-value">{data.university}</span>
                                </div>
                            </div>
                            <div className="about-detail">
                                <span className="detail-icon">💻</span>
                                <div>
                                    <span className="detail-label">Branch</span>
                                    <span className="detail-value">{data.branch}</span>
                                </div>
                            </div>
                            <div className="about-detail">
                                <span className="detail-icon">📅</span>
                                <div>
                                    <span className="detail-label">Year</span>
                                    <span className="detail-value">{data.year}</span>
                                </div>
                            </div>
                        </div>

                        <a href={resumePdf} className="gradient-btn" target="_blank" rel="noreferrer" download="Dineshkumar_M_Resume.pdf">
                            📄 Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
