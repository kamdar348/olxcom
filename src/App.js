import React  from 'react'
import './App.css'
import Footer from './components/footer'
import Button from 'react-bootstrap/Button';
import './App.css';
import Header from './components/Header'
// import Login from './components/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
      <Header />
      {/* <Route path="/login" component={Login} /> */}
      {/* <Login /> */}
      <Footer />      
      </Router>
  
    )
  }
}

 
export default App;
