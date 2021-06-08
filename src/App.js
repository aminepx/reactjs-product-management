import DataCenter from "./API/DataCenter";
import Products from "./components/products/Products";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Details from "./components/products/details";
import Navbar from "./components/products/Navbar";
import Form from "./components/products/Form";
import Update from "./components/products/Update";

function App() {
  return (
    <div className="App">
      <DataCenter>

        <Router>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Products} />
            <Route exact path='/details/:id' component={Details} />
            <Route exact path='/add' component={Form} />
            <Route exact path='/update/:id' component={Update} />
            <Route  />
          </Switch>
        </Router>

      </DataCenter>

    </div>
  );
}

export default App;
