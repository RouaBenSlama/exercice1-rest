//import logo from './logo.svg';
import './App.css';
import Recherche from './Recherche';

function App() {
  return (
    <div className="App">
      <h1>BIENVENUE COMPOSANT APP !</h1>
      <Recherche
        lieu="Montréal"
        onPays={() => console.log("Je m'habille français")}
        //onPays1={() => { return (<div> TEST DIVISION </div>) }}
      />
    </div>
  );
}

export default App;
