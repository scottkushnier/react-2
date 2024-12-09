import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, CardBody, CardText } from "reactstrap";
import SnackOrBoozeApi from "./Api";
import { Singularize, generateId } from "./utilities.js";
import "./NewItem.css";

function NewItem({ items, setItems }) {
  const { category } = useParams();
  const history = useHistory();
  const whatAdding = Singularize(category); // so can say "name of new snack", not "name of new snacks"
  const [formData, setFormData] = useState({
    itemName: "",
    itemDesc: "",
    itemRecipe: "",
    itemServe: "",
  });
  // create item for JSON DB with correct field names
  const createItem = (formData) => ({
    id: generateId(formData.itemName),
    name: formData.itemName,
    description: formData.itemDesc,
    recipe: formData.itemRecipe,
    serve: formData.itemServe,
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };
  // submit info for new item & update everything
  const Submit = (e) => {
    e.preventDefault();
    const newItem = createItem(formData); // update React components & cause rerender
    items[category].push(newItem);
    setItems((items) => ({ ...items }));
    SnackOrBoozeApi.setNewItemOfCategory(newItem, category); // update DB
    history.push(`/${category}`); // in end, redirect to menu page for that category
  };

  return (
    <section>
      <Card>
        <CardBody className="newitemform">
          <form>
            <CardText className="font-weight-bold">
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                placeholder={`name of new ${whatAdding}`}
              />
            </CardText>
            <CardText className="font-italic">
              <input
                type="text"
                name="itemDesc"
                onChange={handleChange}
                placeholder="pithy description"
              />
            </CardText>
            <p>
              <b>Recipe:</b>{" "}
              <input
                type="text"
                name="itemRecipe"
                onChange={handleChange}
                placeholder="how to make"
              />
            </p>
            <p>
              <b>Serve:</b>{" "}
              <input
                type="text"
                name="itemServe"
                onChange={handleChange}
                placeholder="how to serve"
              />
            </p>
            <button onClick={Submit}> Submit </button>
          </form>
        </CardBody>
      </Card>
    </section>
  );
}

export default NewItem;
