import { useEffect, useState } from 'react';
import { useThemeUpdate } from './Contexts/ThemeContext';

const Toggle = () => {
    const [dark, setDark] = useState(false);
    const updateTheme = useThemeUpdate();

    // Its important to wrap updateTheme function in useEffect for proper rendering otherwise can cause error
    useEffect(() => updateTheme(dark), [dark, updateTheme]);

    return (
        <div>
            <h3>Toggle</h3>
            <label htmlFor="dark-mode">
                Dark Mode
                <input onChange={() => setDark(!dark)} checked={dark} id="dark-mode" type="checkbox" name="dark-mode" />
            </label>
        </div>
    );
};

export default Toggle;
