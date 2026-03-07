import { useState } from 'react';
import './Contact.css';

export default function Contact({ data }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    if (!data) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/xaqpyjzk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (response.ok) {
                setSubmitted(true);
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            } else {
                alert("Oops! There was a problem submitting your form");
            }
        } catch (error) {
            alert("Oops! There was a problem connecting to the server");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">// Contact</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Have a project in mind? Let's talk!</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info animate-in">
                        <div className="contact-card glass-card">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div>
                                    <span className="contact-label">Email</span>
                                    <a href={`mailto:${data.email}`} className="contact-value">{data.email}</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📱</span>
                                <div>
                                    <span className="contact-label">Phone</span>
                                    <span className="contact-value">{data.phone}</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div>
                                    <span className="contact-label">Location</span>
                                    <span className="contact-value">{data.location}</span>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            {Object.entries(data.social).map(([name, url]) => (
                                <a key={name} href={url} className="social-link" target="_blank" rel="noreferrer" title={name}>
                                    {name === 'github' && '🐙'}
                                    {name === 'linkedin' && '💼'}
                                    {name === 'instagram' && '📸'}
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="contact-form glass-card animate-in" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-input"
                                placeholder="Your name"
                                value={form.name}
                                onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="form-input"
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-input form-textarea"
                                placeholder="Tell me about your project..."
                                rows={5}
                                value={form.message}
                                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                                required
                            />
                        </div>
                        <button type="submit" className="gradient-btn submit-btn">
                            {submitted ? '✅ Sent!' : '🚀 Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
