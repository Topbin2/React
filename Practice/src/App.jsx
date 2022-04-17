import { Switch, Route } from "react-router";

import Coins from "./components/Coins";
import Coin from "./components/Coin";
import Main from "./Page/Main";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/coins">
          <Coins />
        </Route>
        <Route path="/:coinId">
          <Coin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
