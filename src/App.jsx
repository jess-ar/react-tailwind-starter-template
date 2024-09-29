import { useState, useEffect } from 'react';

const App = () => {
  const [language, setLanguage] = useState('es');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const translations = {
    es: {
      welcome: 'Bienvenid@',
      description: 'Esta es una plantilla base para comenzar con Tailwind y React.',
      callToAction: 'Personaliza este proyecto y comienza a construir tu aplicación.',
      developedBy: (
        <>
          Desarrollado con 💙 y ☕ por <strong>jess-ar</strong>
          <div className="mt-2">
            <a
              href="https://github.com/jess-ar"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
        </>
      ),
    },
    en: {
      welcome: 'Welcome',
      description: 'This is a basic template to start with Tailwind and React.',
      callToAction: 'Customize this project and start building your application.',
      developedBy: (
        <>
          Developed with 💙 and ☕ by <strong>jess-ar</strong>
          <div className="mt-2">
            <a
              href="https://github.com/jess-ar"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </div>
        </>
      ),
    },
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-secondary to-primary dark:from-secondary dark:to-primary">
      <div className="w-full max-w-xs p-6 shadow-lg bg-card sm:p-8 sm:max-w-md rounded-2xl dark:bg-card">
        <h1 className="mb-4 text-2xl font-bold text-center text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
          {translations[language].welcome}
        </h1>
        <p className="mb-4 text-sm text-center text-foreground sm:text-base dark:text-foreground">
          {translations[language].description}
        </p>
        <p className="mb-4 text-sm text-center text-foreground sm:text-base dark:text-foreground">
          {translations[language].callToAction}
        </p>
        <p className="mb-4 text-sm text-center text-foreground dark:text-foreground">
          {translations[language].developedBy}
        </p>
        <div className="flex items-center justify-center mt-4 space-x-4">
          <button
            className="px-4 py-2 text-xs transition-colors border-gray-300 rounded-lg sm:text-sm bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:bg-secondary dark:hover:text-secondary-foreground"
            onClick={handleLanguageChange}
          >
            {language === 'es' ? 'English' : 'Español'}
          </button>
          <button
            className="px-4 py-2 text-xs transition-colors border-gray-300 rounded-lg sm:text-sm bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:bg-secondary dark:hover:text-secondary-foreground"
            onClick={handleThemeChange}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
