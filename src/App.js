import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div style={{ display: "flex" }}>
      <div
        className="sider"
        style={{
          width: 275,
          flexShrink: 0,
          height: "100vh",
          backgroundColor: "aqua",
        }}
      >
        <Switch>
          <Route path="/users">
            <div>Desc</div>
          </Route>
          <Route exact path="/">
            <div>hello</div>
          </Route>
        </Switch>
      </div>
      <div
        className="preview"
        style={{ flexGrow: 1, backgroundColor: "grey", height: "100vh" }}
      >
        <h1 style={{ color: "red" }}>Preview</h1>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
