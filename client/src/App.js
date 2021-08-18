import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Components/Features/Layout/LayoutComponent';
import MainRouting from './Routing/MainRouting';
function App() {

  
  return (
    <div className="App">
      <Router>
        <Layout >
          <MainRouting/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
