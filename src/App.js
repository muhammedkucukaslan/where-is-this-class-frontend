import React, { useState } from 'react';
import ClassroomFinder from './components/ClassroomFinder';
import './styles/App.css';

const App = () => {
  const [language, setLanguage] = useState('tr');

  return (
    <div className="app" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <ClassroomFinder language={language} onLanguageChange={setLanguage} />
    </div>
  );
};

export default App;