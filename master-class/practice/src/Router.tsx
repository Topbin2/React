import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoinDetail from "./pages/CoinDetail";
import Coins from "./pages/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <CoinDetail />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
