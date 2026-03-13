'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'zcodez_cookie_preferences';

const defaultPrefs = {
  essential: true,
  analytics: false,
  marketing: false,
  functional: false
};

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState(defaultPrefs);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setOpen(true);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setPrefs({ ...defaultPrefs, ...parsed });
      } catch {
        setOpen(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!showSettings) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setShowSettings(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [showSettings]);

  const savePrefs = (nextPrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPrefs));
    setPrefs(nextPrefs);
    setOpen(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePrefs({ essential: true, analytics: true, marketing: true, functional: true });
  };

  const rejectNonEssential = () => {
    savePrefs({ essential: true, analytics: false, marketing: false, functional: false });
  };

  const updatePref = (key) => (e) => {
    setPrefs((prev) => ({ ...prev, [key]: e.target.checked }));
  };

  const submitSettings = () => savePrefs({ ...prefs, essential: true });

  return (
    <>
      {open && (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
          <div className="cookie-inner">
            <div className="cookie-text">
              We use cookies to improve your experience, analyze traffic, and personalize content.
            </div>
            <div className="cookie-actions">
              <button className="cookie-btn ghost" onClick={rejectNonEssential}>Reject Non-Essential</button>
              <button className="cookie-btn ghost" onClick={() => setShowSettings(true)}>Manage Preferences</button>
              <button className="cookie-btn" onClick={acceptAll}>Accept All Cookies</button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="cookie-modal-backdrop" role="presentation" onClick={() => setShowSettings(false)}>
          <div
            className="cookie-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Cookie preferences"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cookie-modal-head">
              <h2>Cookie Preferences</h2>
              <button className="cookie-close" onClick={() => setShowSettings(false)} aria-label="Close">×</button>
            </div>
            <p className="cookie-modal-desc">
              Manage your cookie preferences. Essential cookies are always enabled.
            </p>
            <div className="cookie-list">
              <label className="cookie-item">
                <input type="checkbox" checked disabled />
                <span>Essential Cookies</span>
              </label>
              <label className="cookie-item">
                <input type="checkbox" checked={prefs.analytics} onChange={updatePref('analytics')} />
                <span>Analytics Cookies</span>
              </label>
              <label className="cookie-item">
                <input type="checkbox" checked={prefs.marketing} onChange={updatePref('marketing')} />
                <span>Marketing Cookies</span>
              </label>
              <label className="cookie-item">
                <input type="checkbox" checked={prefs.functional} onChange={updatePref('functional')} />
                <span>Functional Cookies</span>
              </label>
            </div>
            <div className="cookie-modal-actions">
              <button className="cookie-btn ghost" onClick={rejectNonEssential}>Reject Non-Essential</button>
              <button className="cookie-btn" onClick={submitSettings}>Save Preferences</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
