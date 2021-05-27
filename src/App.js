import './App.css';
import FruitContainer from './components/FruitContainer'

function App() {

  const fruits = ['apple', 'apricot', 'blueberries', 'cantaloupe', 'cherries', 'dewberry', 'elephant fruit', 'fig', 'grapes', 'honeydew', 'pineapple', 'mangos', 'banana', 'avocado', 'kiwi'];

  return (
    <div className="App">
     <h1>Fruit Filter</h1>
     <FruitContainer fruits={fruits}/>
     {/* passing the fruits data to a fruits property/attribute to be used in the FuitContainer */}
    </div>
  );
}

export default App;
