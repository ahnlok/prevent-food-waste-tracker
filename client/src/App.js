import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Main from "./containers/Main/Main";
import Add from "./containers/Add/Add";
import Edit from "./containers/Edit/Edit";
import NavBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/main/new" component={Add} />
          <Route exact path="/main/:id/edit" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
