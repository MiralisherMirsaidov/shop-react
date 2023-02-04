import "./CardProductsStyle.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {BsFillStarFill} from 'react-icons/bs'

export default function CardProducts(props) {

  function infoProduct() {
    
  }
  console.log(props);
  let state = props.state;
  return (
    <div className="card products pt-4 shadow">
      <div className="text-center">
        <img src={state.thumbnail} className="cardRasm" alt="" />
      </div>
      <div className="pt-3 ps-4 d-flex justify-content-between">
        <div>
          <h4 className="text-muted">{state.title}</h4>
          <h5 className="text-secondary">{state.brand}</h5>
          <h3 className="text-primary">{state.price} $</h3>
        </div>
        <div className="d-flex justify-content-end pe-4 pb-3 fs-1 text-warning">
          <BsFillStarFill />
        </div>
      </div>

      <div className="d-flex justify-content-end pe-4 pb-4">
        <Link to={`/info/${state.id}`}>
          <Button
            onClick={(index) => {
              infoProduct(index);
            }}
            className="w-25 batafsil py-3 mb-1"
            variant="contained"
          >
            Info
          </Button>
        </Link>
      </div>
    </div>
  );
}
