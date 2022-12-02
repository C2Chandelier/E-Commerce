import logo from './logo.svg';
import './App.css';
import Register from './component/register/register.js';
import Login from './component/login/login.js';
import Admin_pannel from './component/pannel_admin/Admin_pannel';
import Single_product from './component/single_product_page/single_product_page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

//export default App;
export default Login;

