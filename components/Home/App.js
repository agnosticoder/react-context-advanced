import ThemeProvider from '../Contexts/ThemeContext';
import Toggle from '../Toggle';
import Content from '../Content';

// Toggle and Content components are components of website which are wrapped with Theme provider component previously created
// This means that these components has access to values that has been passed by ThemeProvider
const App = () => (
    <ThemeProvider>
        <Toggle />
        <Content />
    </ThemeProvider>
);

export default App;
