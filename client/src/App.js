import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Footer from './Components/Features/Footer/FooterComponent';
import Header from './Components/Features/Header/HeaderComponent';
import Layout from './Components/Pages/Layout/LayoutComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Layout />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
