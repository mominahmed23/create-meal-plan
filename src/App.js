import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { SideBar } from "./component/SideBar";
import Description from "./component/Description";
import SideBar from "./component/SideBar";
import Preparation from "./component/Preparation";

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
            backgroundColor: "#ffffff",
          }}
        >
          <Switch>
            <Route exact path="/">
              <SideBar />
            </Route>
            <Route path="/description">
              <Description />
            </Route>
            <Route exact path="/preparation">
              <Preparation />
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
