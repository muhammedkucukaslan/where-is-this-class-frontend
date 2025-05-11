import React from 'react';
import '../styles/LanguageSelector.css';

const LanguageSelector = ({ language, onLanguageChange }) => {
  const languages = [
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ];

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          onClick={() => onLanguageChange(lang.code)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;