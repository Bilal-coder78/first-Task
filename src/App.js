import './App.css';
import Nav from './components/navbar/Nav';
import logo from "./assets/logo.png"
import Service from './components/Services/Service';

function App() {
  return (
    <>
    <Nav image={logo}/>
    <Service/>
    </>
  );
}

export default App;
