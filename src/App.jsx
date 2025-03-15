import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import Intro from './components/Intro';
import Menu from './components/Menu';
import Routes from './Routes';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Intro />
      <Header />
      <Menu />
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </>
  );
}

export default App;
