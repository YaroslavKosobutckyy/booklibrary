import './App.css';
import MainPage from './pages/mainpage/mainpage';
import 'antd/dist/antd.css';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
