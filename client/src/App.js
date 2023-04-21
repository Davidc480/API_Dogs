import "./App.css";
import { Home, Landing, Form, Detail } from "./views";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Landing />} />

      <Route path="/Home" render={() => <Home />} />

      <Route path="/create" render={() => <Form />} />

      <Route path="/Detail" render={() => <Detail />} />
    </div>
  );
}

export default App;
