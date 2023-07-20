import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Products from './components/Products'
import Order from './components/Order'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
  return (
      <>
      <Router>
         <Header/>
          <Routes>
            <Route  exact path='/' element={<Home/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='order' element={<Order/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Registration/>}/>
          </Routes>
          <Footer />
      </Router>
      </>
    
  );
}

export default App;
