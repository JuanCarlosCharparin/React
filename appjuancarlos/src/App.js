
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <ItemListContainer greeting={'Bienvendios al e-commerce'}/>

      <img style={{marginLeft: '1200px', marginTop: '-5000px'}} src='/images/carrito.svg'/>
      0

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
