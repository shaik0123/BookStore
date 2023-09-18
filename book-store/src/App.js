import logo from './logo.svg';
import './App.css';
import SignUp from './components/pages/signup/SignUp';
import SignIn from './components/pages/signin/SignIn';
import Navbar from './components/navbar/Navbar';
import { Router } from 'react-router-dom';
import Card from './components/card/Book';
import Cards from './components/card/Book';
import ForgotPassword from './components/forgotpassword/Forgotpassword';


function App() {
  return (
    <div>
      <SignUp/>
      <SignIn/>
      <Navbar/>
      <Cards/>
      <ForgotPassword/>
      {/* <Router/> */}
    </div>
  );
}

export default App;
