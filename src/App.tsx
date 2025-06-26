import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import { TaskContext } from './contexts/TaskContext';

export function App() {
  return (
    <TaskContext.Provider value={{ key: 'novo valor' }}>
      <Home />;
    </TaskContext.Provider>
  );
}
