import Home from "./containers/home";
import Nav from "./containers/nav";
import Container3 from "./containers/container3";
import data from "./data/recipes";
import Container5 from "./containers/container5";
import data5 from "./data/recipes5";



function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
	  	<Container3 recipes={data} />
			<Container5 recipes={data5} />
    </div>
  );
}

export default App;



