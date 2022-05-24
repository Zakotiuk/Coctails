import { Helmet } from 'react-helmet';
import './App.css';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <div className="App">
      
      {/* ban zooming */}
      <Helmet> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      </Helmet> 

      <MainPage/>
    </div>
  );
}



export default App;
