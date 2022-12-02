import logo from './logo.svg';
import './App.css';
import Admin_pannel from './component/pannel_admin/Admin_pannel';
import Single_product from './component/single_product_page/single_product_page';
import Register from './component/register/register';
import Login from './component/login/login';

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

<<<<<<< HEAD
//export default App;
export default Login;
=======
// export default App;
//export default Single_product;
// export default Admin_pannel;
export default Register;
// export default Login;
>>>>>>> registerHtml

