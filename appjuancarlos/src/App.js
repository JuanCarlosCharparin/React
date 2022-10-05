
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Count from './components/ItemCount.js/ItemCount';
import MercadoLibre from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const handleOnAdd = () => {
    console.log('agregar al carrito')
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          
          <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
        
      </BrowserRouter>
      
      {/* <MercadoLibre/> */}
      {/* <ItemListContainer/> */}

      
      {/* <Count stock={'15'} onAdd={handleOnAdd} initial={0}/> */}
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
