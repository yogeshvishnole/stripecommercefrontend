import HomePage from "./components/home-page";
import NotFound from "./components/not-found";
import ShopPage from "./components/pages/shop/shop";
import { Switch, Route } from "react-router-dom";
import SingleProduct from "./components/single-product/single-product";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route eaxct path="/product/:id" component={SingleProduct} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
