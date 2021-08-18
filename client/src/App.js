import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Components/Features/Layout/LayoutComponent';
import Routing from './Routing/Routing';
function App() {

  return (
    <div className="App">
      <Router>
        <Layout >
          <Routing/>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
