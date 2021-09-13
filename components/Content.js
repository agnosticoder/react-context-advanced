import { useTheme } from './Contexts/ThemeContext';
import styles from '../styles/modules/Content.module.scss';

const Content = () => {
    const theme = useTheme();
    // Conditionally rendering styles based on the value of theme that is passed down by ThemeContext
    const themeStyles = theme ? styles.dark : styles.light;

    return (
        <div>
            <h3>Main content of Website</h3>
            <h4>Theme:</h4>
            {/* Conditionally allocating classnames */}
            <div className={`${themeStyles} ${styles.content}`} />
        </div>
    );
};

export default Content;
