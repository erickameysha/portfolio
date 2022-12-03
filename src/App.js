import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skils from "./Skils/Skils";
import Contacts from "./contacts/Contacts";
import MyProjects from "./MyProjects/MyProjects";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skils/>
            <MyProjects/>
            <Contacts/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
