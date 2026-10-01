import React, { useState } from 'react';

const LoginPage = ({ onNavigateToRegister, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
    // Add your backend authentication logic here
    if (onLoginSuccess) onLoginSuccess();
  };

  return (
    <div style={styles.container}>
      {/* Top Header / Logo Area */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          {/* Heart icon matching CardiaWatch design */}
          <svg
            style={styles.logoIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0F766E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            <path d="M12 12l-1.5-1.5M12 12l1.5 1.5" />
          </svg>
          <span style={styles.logoText}>CardiaWatch</span>
        </div>
      </div>

      {/* Main Form Card */}
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h1 style={styles.title}>Welcome back</h1>
          <p style={styles.subtitle}>
            Enter your credentials to access your daily risk monitoring dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <div style={styles.labelRow}>
              <label htmlFor="password" style={styles.label}>
                Password
              </label>
              <a href="#forgot" style={styles.forgotLink}>
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              style={styles.checkbox}
            />
            <label htmlFor="rememberMe" style={styles.checkboxLabel}>
              Remember this device for 30 days
            </label>
          </div>

          <button type="submit" style={styles.submitBtn}>
            Log in &rarr;
          </button>
        </form>

        <div style={styles.cardFooter}>
          <p style={styles.footerText}>
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onNavigateToRegister}
              style={styles.signupLinkBtn}
            >
              Create an account
            </button>
          </p>
        </div>
      </div>

      {/* Footer Info Badge matching the 3 bottom cards on landing page */}
      <div style={styles.infoBadge}>
        <span style={styles.badgeTag}>SECURE</span>
        <span style={styles.badgeText}>
          Bayesian risk assessment engine &bull; HIPAA Compliant
        </span>
      </div>
    </div>
  );
};

// Styles designed to match your screenshot theme
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#F8FAFC',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#0F172A',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    marginBottom: '28px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoIcon: {
    width: '28px',
    height: '28px',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#000000',
    letterSpacing: '-0.3px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
    width: '100%',
    maxWidth: '440px',
    padding: '36px 32px',
    boxSizing: 'border-box',
  },
  cardHeader: {
    marginBottom: '24px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#0F172A',
    margin: '0 0 8px 0',
    letterSpacing: '-0.4px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#64748B',
    lineHeight: '1.5',
    margin: 0,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  labelRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#334155',
  },
  forgotLink: {
    fontSize: '13px',
    color: '#0F766E',
    textDecoration: 'none',
    fontWeight: '500',
  },
  input: {
    padding: '10px 14px',
    fontSize: '15px',
    borderRadius: '8px',
    border: '1px solid #CBD5E1',
    outline: 'none',
    backgroundColor: '#FAFAFA',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    margin: '4px 0',
  },
  checkbox: {
    width: '16px',
    height: '16px',
    accentColor: '#0F766E',
    cursor: 'pointer',
  },
  checkboxLabel: {
    fontSize: '13px',
    color: '#64748B',
    cursor: 'pointer',
  },
  submitBtn: {
    marginTop: '6px',
    backgroundColor: '#0F766E', // Matches green/teal button in screenshot
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  cardFooter: {
    marginTop: '24px',
    paddingTop: '20px',
    borderTop: '1px solid #F1F5F9',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '14px',
    color: '#64748B',
    margin: 0,
  },
  signupLinkBtn: {
    background: 'none',
    border: 'none',
    color: '#0F766E',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '14px',
    padding: 0,
  },
  infoBadge: {
    marginTop: '32px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    padding: '10px 18px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  badgeTag: {
    backgroundColor: '#CCFBF1',
    color: '#0F766E',
    fontSize: '11px',
    fontWeight: '700',
    padding: '2px 8px',
    borderRadius: '4px',
  },
  badgeText: {
    fontSize: '12px',
    color: '#64748B',
  },
};

export default LoginPage;