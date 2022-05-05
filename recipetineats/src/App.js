import Home from "./containers/home";
import Container3 from "./containers/container3";
import data from "./data/recipes";


function App() {
  return (
    <div className="App">
     <Home />
		<Container3 recipes={data} />
    </div>
  );
}

export default App;



