import { createContext, useContext, useState } from 'react';

// Two different context has been created for state value and setState functions
const ThemeContext = createContext(true);
const ThemeUpdateContext = createContext();

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

// ThemeProvider is a compoenent which wraps its children inside the Context Providers
// Also it can also have its state which can be passed down as a value
const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const updateTheme = (value) => setIsDark(value);

    return (
        <ThemeContext.Provider value={isDark}>
            <ThemeUpdateContext.Provider value={updateTheme}>{children}</ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
