import React, { useState, useRef } from 'react';
import LanguageSelector from './LanguageSelector';
import SearchResult from './SearchResult';
import useTranslation from '../hooks/useTranslation';
import '../styles/ClassroomFinder.css';

const API_BASE_URL = process.env.REACT_APP_API_URL 

const ClassroomFinder = ({ language, onLanguageChange }) => {
  const [classCode, setClassCode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const t = useTranslation(language);

  const handleInputChange = (e) => {
    setClassCode(e.target.value);
    if (error) setError('');
    if (result) setResult(null);
  };

  const handleSearch = async () => {
    const code = classCode.trim();
    if (!code) return;

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      console.log(`Aranan kod: ${code}`);
      const url = `${API_BASE_URL}/codes/${code}?language=${language}`;
      console.log(`API URL: ${url}`);

      const response = await fetch(url);
      console.log('API yanıtı:', response);

      if (!response.ok) {
        throw new Error('not_found');
      }

      const data = await response.json();
      console.log('Alınan veri:', data);
      setResult(data);
    } catch (error) {
      console.error('Hata:', error);
      setError(
        error.message === 'not_found'
          ? t('errorNotFound')
          : t('errorNetwork')
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="card">
      <LanguageSelector 
        language={language} 
        onLanguageChange={onLanguageChange} 
      />
      
      <h1>{t('title')}</h1>
      
      <div className="search-container">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          value={classCode}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={t('placeholder')}
          autoFocus
        />
        <button
          className="search-button"
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? '...' : t('searchBtn')}
        </button>
      </div>
      
      {error && <div className="error-message">{error}</div>}
      
      {result && (
        <SearchResult result={result} language={language} />
      )}
    </div>
  );
};

export default ClassroomFinder;