import "./App.css";
import { Home, Landing, Form, Detail } from "./views";
import { Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}

      <Route exact path="/" render={() => <Landing />} />

      <Route path="/home" render={() => <Home />} />

      <Route path="/create" render={() => <Form />} />

      <Route path="/detail/:id" render={() => <Detail />} />
    </div>
  );
}

export default App;
