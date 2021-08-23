import Footer from "../Footer/FooterComponent";
import Header from "../Header/HeaderComponent";
import Login from "../../Pages/Login/LoginComponent";

const Layout = ({children})=> {
    return (
      <div>
        <Header />
       
        {children}
         <Login />
        <Footer />
        
      </div>
    );
}
export default Layout;
