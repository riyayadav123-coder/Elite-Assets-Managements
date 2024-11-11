import './App.css';
import Header from './components/navBar/header/Header';
import Home from './components/homePage/HomePage';
import Footer from './components/navBar/footer/Footer';
// import SideBar from './components/navBar/sideBar/SideBar';



function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <SideBar /> */}
      <Footer />
    </div>

  );
}

export default App;
