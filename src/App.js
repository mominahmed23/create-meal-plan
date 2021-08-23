import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/storeConfig/store";
import SidebarForm from "./views/SidebarForm";
import Preview from "./views/Preview";

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: "flex" }}>
        <SidebarForm />
        <Preview />
      </div>
    </Provider>
  );
}

export default App;
