import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/NavBar/ItemListContainer';
import CarWidget from './components/NavBar/CarWidget';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <CarWidget></CarWidget>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
