import './App.css';
import RoutesApp from './routes/RoutesApp';
import { ThemeProvider } from './themes/ThemeContext';
import './themes/ThemeContext.css'

const App = () => {
  return (
    <ThemeProvider>
        <RoutesApp />
    </ThemeProvider>
  );
};

export default App;

// contexto --> theme app --> section clases --> router --> pages