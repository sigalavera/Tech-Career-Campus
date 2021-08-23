import Login from "../../Pages/Login/LoginComponent";
import Footer from "../Footer/FooterComponent";
import Header from "../Header/HeaderComponent";


const Layout = ({children})=> {
  const user = false
    return (
      <div>
        <Header />
       {user?children:<Login/>}
        <Footer />
        
      </div>
    );
}
export default Layout;
