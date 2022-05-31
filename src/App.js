import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form_order from './components/form_order/Form_order';
import CatalogPage from './components/pages/CatalogPage';
import CocktailPage from './components/pages/CocktailPage';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <div className="App">
      
      {/* ban zooming */}
      <Helmet> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Helmet> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path="/catalog" element={<CatalogPage/>}></Route>
        <Route path="/catalog/:id" element={<CocktailPage/>}/>
        <Route path="/" element={<Form_order/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
