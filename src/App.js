import Feedback from "./componemnts/Feedback/Feedback";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  document.body.classList.add("bg-dark");

  return (
    <Provider store={store}>
      <Feedback />
    </Provider>
  );
}

export default App;
