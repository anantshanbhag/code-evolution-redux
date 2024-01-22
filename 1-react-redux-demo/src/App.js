import { Provider } from "react-redux";

import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer copy";
import NewHooksCakeContainer from "./components/NewHooksCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <HooksCakeContainer />
      <HooksIceCreamContainer />
      <NewHooksCakeContainer />
      <ItemContainer isCake />
      <UserContainer />
    </Provider>
  );
}

export default App;
