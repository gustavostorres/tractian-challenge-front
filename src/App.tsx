import './App.css';
import { CompanyProvider } from './contexts/CompanyContext';
import { NodeProvider } from './contexts/NodeContext';
import { HomeApp } from './pages/HomeApp';
import { QueryClient, QueryClientProvider } from 'react-query';


function App() {
  const queryClient = new QueryClient();

  return (
    <div style={{backgroundColor: '#D8DFE6'}}>
      <QueryClientProvider client={queryClient}>
        <CompanyProvider>
          <NodeProvider>
            <HomeApp />
          </NodeProvider>
        </CompanyProvider>
      </QueryClientProvider>
    </div>
    
  );
}

export default App;
