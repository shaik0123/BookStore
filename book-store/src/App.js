import logo from './logo.svg';
import './App.css';
import Router from './components/route/Router';
import BookContextProvider from './components/context/BookContext';
import BookDetails from './components/book_components/BookDetails';
import Dashboard from './components/dashboard/Dashboard';
import NavbarContextProvider from './components/context/NavbarContext';
import BookQuantity from './components/book_components/BookQuantity';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/book_components/Cart';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <CartContextProvider>
        <BookContextProvider>
          <NavbarContextProvider>
          <Router>
            <BookDetails />
            <BookQuantity/>
            <Dashboard />
            <Cart />
            <Navbar />
          </Router>
          </NavbarContextProvider>
        </BookContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
