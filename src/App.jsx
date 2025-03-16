import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './Routes';

import './styles/index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="full-container">
      <Header />
      <Menu />
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </div>
  );
}

export default App;
