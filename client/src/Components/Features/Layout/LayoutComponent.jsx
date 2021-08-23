import Footer from "../Footer/FooterComponent";
import Header from "../Header/HeaderComponent";


const Layout = ({children})=> {
    return (
      <div>
        <Header />
       
        {children}
        
        <Footer />
        
      </div>
    );
}
export default Layout;
