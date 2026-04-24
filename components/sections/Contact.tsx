'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            
            if (res.ok) {
                setStatus('sent');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('idle');
                alert('Failed to send message. Please ensure your email credentials are set up in the environment variables.');
            }
        } catch (error) {
            console.error(error);
            setStatus('idle');
            alert('An error occurred while sending the message.');
        }
    };

    const contactItems = [
        { icon: <Mail size={16} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#06b6d4' },
        { icon: <Phone size={16} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#a855f7' },
        { icon: <MapPin size={16} />, label: 'Location', value: personalInfo.location, href: '#', color: '#f59e0b' },
    ];

    return (
        <section id="contact" className="section-padding relative overflow-hidden bg-background">
            {/* Background accent */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[800px] h-[400px] bg-cyan-500/3 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-3">06. Let's Talk</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Get In Touch</h2>
                    <div className="section-divider" />
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Open to full-time opportunities, freelance projects, and interesting collaborations.
                        <br />
                        <span className="text-cyan-400 font-medium">Let's build something great together.</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Left: Info */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        custom={1}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        {/* Contact details */}
                        <div className="glass rounded-2xl p-7 space-y-5">
                            <h3 className="text-white font-display font-semibold text-lg mb-4">Contact Details</h3>
                            {contactItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                                        style={{ background: `${item.color}15`, border: `1px solid ${item.color}25`, color: item.color }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-slate-500 text-xs font-mono">{item.label}</p>
                                        <p className="text-slate-300 text-sm">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social */}
                        <div className="glass rounded-2xl p-7">
                            <h3 className="text-white font-display font-semibold text-base mb-4">Find Me Online</h3>
                            <div className="flex flex-col gap-3">
                                {[
                                    { icon: <Github size={16} />, label: 'GitHub', url: personalInfo.github, color: '#ffffff' },
                                    { icon: <Linkedin size={16} />, label: 'LinkedIn', url: personalInfo.linkedin, color: '#0077b5' },
                                    { icon: <Mail size={16} />, label: 'Email', url: `mailto:${personalInfo.email}`, color: '#06b6d4' },
                                ].map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl text-slate-400 hover:text-white transition-all duration-200 hover:bg-white/5 group"
                                    >
                                        <span style={{ color: link.color }}>{link.icon}</span>
                                        <span className="text-sm font-medium">{link.label}</span>
                                        <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
                        variants={fadeUp}
                        custom={2}
                        className="lg:col-span-3"
                    >
                        <div className="glass rounded-2xl p-8">
                            {status === 'sent' ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                                    <div className="w-20 h-20 rounded-full bg-cyan-500/15 flex items-center justify-center text-4xl">
                                        ✅
                                    </div>
                                    <h3 className="text-white font-display font-bold text-2xl">Message Sent!</h3>
                                    <p className="text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-4 px-6 py-2.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl text-sm hover:bg-cyan-500/20 transition-all"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-white font-display font-semibold text-xl mb-6">Send a Message</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { name: 'name', label: 'Your Name', placeholder: 'John Smith', type: 'text' },
                                            { name: 'email', label: 'Email Address', placeholder: 'john@example.com', type: 'email' },
                                        ].map((field) => (
                                            <div key={field.name}>
                                                <label className="text-slate-400 text-xs font-mono block mb-1.5">{field.label}</label>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={form[field.name as keyof typeof form]}
                                                    onChange={handleChange}
                                                    placeholder={field.placeholder}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 focus:bg-cyan-500/5 transition-all"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <label className="text-slate-400 text-xs font-mono block mb-1.5">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            placeholder="Full-Time Opportunity / Freelance / Collaboration"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 focus:bg-cyan-500/5 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-slate-400 text-xs font-mono block mb-1.5">Message</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell me about your project or opportunity..."
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 focus:bg-cyan-500/5 transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                                    >
                                        {status === 'sending' ? (
                                            <div className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                                        ) : (
                                            <Send size={16} />
                                        )}
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
