import logo from './logo.svg';
import './App.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      <Loader
        className="z-50 fixed bg-primary-light w-screen h-screen flex justify-center items-center"
        type="Oval"
        color="#FF398D"
        height={100}
        width={100}
        timeout={5000} //3 secs
      />

      <Header className="sticky top-0 left-0 z-40 bg-primary-light bg-opacity-50"/>
      <Hero />

      
      
      <header className="App-header">
        <div className="bg-red-500">123
        <Loader
        className="bg-black"
        type="Oval"
        color="#FF398D"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
