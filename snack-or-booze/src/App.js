import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./MenuPage";
import Item from "./Item";
import NewItem from "./NewItem";
import { Capitalize } from "./utilities";

const categories = ["snacks", "desserts", "drinks"];
const descriptions = {
  snacks: "A delicious variety of snacks for your snacking enjoyment.",
  drinks: "A sparkling variety of beverages to tempt you. Drink responsibly!",
  desserts: "For your sweet tooth!",
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getAllMenuItems() {
      let allItems = {};
      for (let category of categories) {
        let pageItems = await SnackOrBoozeApi.getItemsOfCategory(category);
        allItems[category] = pageItems;
      }
      setItems(allItems);
      setIsLoading(false);
    }
    getAllMenuItems();
  }, []);

  useEffect(() => {}, [items]); // include dependency on items because need counts for navbar

  if (isLoading) {
    return <h2>Loading &hellip;</h2>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar categories={categories} items={items} />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:category/new">
              <NewItem items={items} setItems={setItems} />
            </Route>
            {/* links for each menu page */}
            {categories.map((category) => (
              <Route key={category} exact path={`/${category}`}>
                <Menu
                  category={category}
                  items={items[category]}
                  title={Capitalize(category)}
                  desc={descriptions[category]}
                />
              </Route>
            ))}
            {/* links for item of each menu page */}
            {categories.map((category) => (
              <Route key={category + "id"} path={`/${category}/:id`}>
                <Item items={items[category]} cantFind={`/${category}`} />
              </Route>
            ))}
            <Route>
              <p className="error">Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
