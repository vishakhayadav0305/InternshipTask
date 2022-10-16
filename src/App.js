import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomHeader from './components/BottomHeader';
import UpperSection from './components/UpperSection';
import BottomSection from './components/BottomSection';

function App() {
  return (
    <div style={{backgroundColor:"black"}}>
         <Header/>
         <BottomHeader/>
         <UpperSection/>
         <BottomSection/>
    </div>
  );
}

export default App;
