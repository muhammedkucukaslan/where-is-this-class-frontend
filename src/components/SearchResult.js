import React from 'react';
import useTranslation from '../hooks/useTranslation';
import '../styles/SearchResult.css';

const SearchResult = ({ result, language }) => {
  const t = useTranslation(language);

  if (!result) {
    return null;
  }
  console.log("result",result.imageUrl);
  return (
    <div className="result-container">
      <div className="result-item">
        <span className="result-label">{t('buildingLabel')}: </span>
        <span>{result.building || '-'}</span>
      </div>
      
      <div className="result-item">
        <span className="result-label">{t('floorLabel')}: </span>
        <span>{result.floor || '-'}</span>
      </div>
      
      {result.imageUrl && (
        <div className="result-item image-container">
          <img 
            className="classroom-image"
            src={result.imageUrl} 
            alt={result.building} 
          />
        </div>
      )}
      <div className="result-item">
        <span className="result-label">{t('descriptionLabel')}: </span>
        <span>{result.description || '-'}</span>
      </div>
      
      <div className="result-item">
        <span className="result-label">{t('detailLabel')}: </span>
        <span>{result.detail || '-'}</span>
      </div>
      
      <p className="feedback">{t('feedback')}</p>
    </div>
  );
};

export default SearchResult;