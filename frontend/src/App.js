import data from './data.js';
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
function App() {

  const openMenu  = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
      
<BrowserRouter>
      <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
          <Link to="/">SinaShop</Link>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>

        <aside className="sidebar">
            <h2>Shopping Categories</h2>
             <button className="sidebar-close-button" onClick={closeMenu}>&#10006;</button>
            <ul>
                <li>
                    <a href="index.html">Monitor</a>
                </li>
                <li>
                    <a href="index.html">Laptop</a>
                </li>
                <li>
                    <a href="index.html">Keyboard</a>
                </li>
                <li>
                    <a href="index.html">Mouse</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
                <Route path="/products/:id" component={ProductScreen} />
                <Route path='/' exact={true} component={HomeScreen} />
  
            </div>
        </main>
        <footer className="footer">
            All rights reserved by Sina Jafarzadeh.
        </footer>
    </div>
 </BrowserRouter>
  );
}

export default App;
