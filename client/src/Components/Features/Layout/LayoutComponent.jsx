import { useSelector } from "react-redux";
import Login from "../../Pages/Login/LoginComponent";
import Footer from "../Footer/FooterComponent";
import Header from "../Header/HeaderComponent";


const Layout = ({children})=> {
const user = useSelector((state) => state.user);


    return (
      <div>
        <Header />
        {user.isConnected ? children : <Login errors={user.errors} />}
        <Footer />
      </div>
    );
}
export default Layout;
