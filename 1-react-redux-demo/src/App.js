import { Provider } from "react-redux";

import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer copy";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <HooksCakeContainer />
      <HooksIceCreamContainer />
    </Provider>
  );
}

export default App;
