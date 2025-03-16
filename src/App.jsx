import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Loading from './components/Loading';
import Modal from './components/Modal';
import Header from './components/Header';
import Menu from './components/Menu';
import Routes from './Routes';

import './styles/index.css';

const queryClient = new QueryClient();

function App() {
  const ref = useRef(null);

  return (
    <div className="full-container">
      <Loading />
      <Modal />
      <Header ref={ref} />
      <Menu ref={ref} />
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </div>
  );
}

export default App;
