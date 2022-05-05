import Home from "./containers/home";
import Nav from "./containers/nav";
import Container3 from "./containers/container3";
import data from "./data/recipes";



function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
	  	<Container3 recipes={data} />
    </div>
  );
}

export default App;



