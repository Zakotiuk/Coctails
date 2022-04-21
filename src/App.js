import { Helmet } from 'react-helmet';
import './App.css';
import Header from './components/head_home/Header';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      {/* ban zooming */}
      <Helmet> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Helmet> 

    <div className="container">
      <Navbar/>
      <Header/>
      </div>
    </div>
  );
}



export default App;
