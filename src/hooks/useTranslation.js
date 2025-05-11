import { useMemo } from 'react';
import translations from '../translations';

const useTranslation = (language) => {
  const t = useMemo(() => {
    return (key) => {
      if (!translations[language]) {
        return key;
      }
      
      return translations[language][key] || key;
    };
  }, [language]);

  return t;
};

export default useTranslation;