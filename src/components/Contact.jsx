import { useState, useRef } from 'react';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo, socialLinks, emailjsConfig } from '../data/config';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import toast from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setSending(true);

    if (
      emailjsConfig.serviceId !== 'YOUR_SERVICE_ID' &&
      emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID'
    ) {
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          formRef.current,
          emailjsConfig.publicKey
        );
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        console.error(err);
        toast.error('Failed to send message. Please try again.');
      }
    } else {
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
      toast.success('Opening your email client...');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }

    setSending(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy-800/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Interested in working together? Let's connect."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-gray-400 text-sm leading-relaxed">
              I'm open to internship opportunities, collaborations, and conversations
              about engineering, backend systems, and AI. Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent transition-colors"
              >
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Mail size={16} />
                </div>
                {personalInfo.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <MapPin size={16} />
                </div>
                {personalInfo.location}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              )}
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-navy-900/60 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-navy-900/60 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-gray-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-navy-900/60 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1.5">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 bg-navy-900/60 border border-white/10 rounded-lg text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                placeholder="Tell me about the opportunity or your idea..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent-dark disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              {sending ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
