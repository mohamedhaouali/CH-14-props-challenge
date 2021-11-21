import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from 'react';
import Cars from './components/Cars/Cars'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';





class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />
        <Cars />
        <Footer />

      </div>
    )
  }
}

export default App;
