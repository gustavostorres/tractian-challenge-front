import './App.css';
import { CompanyProvider } from './contexts/CompanyContext';
import { HomeApp } from './pages/HomeApp';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  const queryClient = new QueryClient();

  return (
    <div style={{backgroundColor: '#D8DFE6'}}>
      <QueryClientProvider client={queryClient}>
        <CompanyProvider>
            <HomeApp />
        </CompanyProvider>
      </QueryClientProvider>
    </div>
    
  );
}

export default App;
