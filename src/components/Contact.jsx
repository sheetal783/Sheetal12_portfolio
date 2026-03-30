import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './animations/AnimatedSection';
import ParallaxLayer from './animations/ParallaxLayer';
import FloatingMotion from './animations/FloatingMotion';
import { HiMail, HiCheckCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    setIsSending(true);

    try {
      const form = formRef.current;
      const formData = new FormData(form);
      formData.append('_subject', 'New message from portfolio contact form');
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/ajax/gourhsheetal@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true)) {
        setIsSubmitted(true);
        setStatusMessage('Message sent successfully. Check your inbox soon.');
        form.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        const message = result.message || 'FormSubmit needs activation to send emails.';
        console.error('FormSubmit response error:', result);
        setStatusMessage(`Failed to send message. ${message}`);
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-24 bg-secondary text-[var(--color-text)] px-6 md:px-12"
    >
      <div className="container mx-auto">
        <ParallaxLayer speed={0.12} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Get In <span className="text-gold">Touch</span>
          </h2>
        </ParallaxLayer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 italic text-[var(--color-text)]">Let's build something amazing together!</h3>
            <p className="text-muted mb-12 text-lg">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-gold/10 rounded-full text-gold text-2xl group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(255,215,0,0.1)]">
                  <HiMail />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted uppercase">Email</h4>
                  <p className="text-lg font-medium text-[var(--color-text)]">gourhsheetal@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-secondary/10 rounded-full text-soft text-2xl group-hover:scale-110 transition-transform">
                  <FaLinkedin />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted uppercase">LinkedIn</h4>
                  <p className="text-lg font-medium text-[var(--color-text)]">https://www.linkedin.com/in/sheetal-gourh-994272339/</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-full text-accent text-2xl group-hover:scale-110 transition-transform">
                  <FaGithub />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-muted uppercase">GitHub</h4>
                  <p className="text-lg font-medium text-[var(--color-text)]">https://github.com/sheetal783/</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6">
              {[
                {
                  icon: FaGithub,
                  href: 'https://github.com/sheetal783/',
                  label: 'GitHub',
                },
                {
                  icon: FaLinkedin,
                  href: 'https://www.linkedin.com/in/sheetal-gourh-994272339/',
                  label: 'LinkedIn',
                },
                {
                  icon: FaTwitter,
                  href: 'https://twitter.com/',
                  label: 'Twitter',
                },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.15 }}
                  className="text-3xl text-muted transition-colors"
                >
                  <FloatingMotion className="inline-flex">
                    <Icon />
                  </FloatingMotion>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 border border-glass-border shadow-2xl relative"
          >
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 rounded-2xl backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                    className="text-6xl text-primary mb-4"
                  >
                    <HiCheckCircle />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-soft mb-2">Message Sent!</h3>
                  <p className="text-muted">Thanks for reaching out, Sheetal will get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New message from portfolio contact form" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" className="hidden" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-muted mb-2 uppercase tracking-widest">Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-card border border-[var(--color-border)] rounded-2xl px-5 py-3 text-[var(--color-text)] focus:outline-none focus:border-gold/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-muted mb-2 uppercase tracking-widest">Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-card border border-[var(--color-border)] rounded-2xl px-5 py-3 text-[var(--color-text)] focus:outline-none focus:border-secondary transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-muted mb-2 uppercase tracking-widest">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-card border border-[var(--color-border)] rounded-2xl px-5 py-3 text-[var(--color-text)] focus:outline-none focus:border-accent transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-muted mb-2 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  name="message"
                  rows="5"
                  placeholder="Enter your message"
                  className="w-full bg-card border border-[var(--color-border)] rounded-2xl px-5 py-3 text-[var(--color-text)] focus:outline-none focus:border-gold/50 transition-colors text-sm resize-none"
                ></textarea>
              </div>
              {statusMessage && (
                <p className={`text-sm ${isSubmitted ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {statusMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={isSending}
                className="btn-primary w-full rounded-3xl py-4 uppercase tracking-[0.24em] text-sm disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
