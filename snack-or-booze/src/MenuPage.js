import React from "react";
import { Link } from "react-router-dom";
import "./MenuPage.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function MenuPage({ category, items, title, desc }) {
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title} Menu
          </CardTitle>
          <CardText>{desc}</CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${category}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
          <div style={{ height: "20px" }}></div>
          <button>
            <Link className="buttonlink" to={`/${category}/new`}>
              Add to {category}
            </Link>
          </button>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuPage;
