import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ebay from "../..//img/ebay.png";
import "./NavbarStyle.css";
import ProductsAypi from "../../Utilits/ProductsAypi";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [type, setType] = useState(null);
  const [select, setSelect] = useState([null]);
  const navigate = useNavigate();

  useEffect(() => {
    ProductsAypi.getAllCategories()
      .then((res) => {
        setSelect([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userInfo = useSelector((state) => state);
  console.log(userInfo);
  // const useShopCard = useSelector(state => state.shopCard) 
  // console.log(useShopCard);

  function searchCategories(params) {
    navigate(`/SearchCategories/${params.target.value}`);
  }

  return (
    <div className="shadow py-4 bg-white d-flex navbar justify-content-evenly align-content-center">
      <Link to={"/products"}>
        {" "}
        <img src={ebay} alt="" />
      </Link>
      <div className="d-flex">
        <select
          onChange={(item) => {
            searchCategories(item);
          }}
          className="me-3 bg-light border-0"
          name=""
          id=""
        >
          {select.length > 0 ? (
            <>
              {select.map((arr, index) => {
                return (
                  <option key={arr} value={arr}>
                    {arr}
                  </option>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </select>
        <input
          type="text"
          className="form-control w-100 bg-light"
          placeholder="Search for items..."
          onInput={(item) => {
            setType(item.target.value);
            console.log(item.target.value);
          }}
        />
        <Link to={`/search/${type}`}>
          <button className="btn btn-primary">
            <i
              className="text-white fs-1"
              class="fa-solid fa-magnifying-glass"
            ></i>
          </button>
        </Link>
      </div>
      <div className="d-flex align-items-center mt-2">
        <div className="d-flex pe-5">
          <i
            className="fs-1 icon pe-2"
            style={{ fontSize: "25px", color: "red" }}
            class="fa-regular fa-heart"
          ></i>
          <p className="ps-3">Wishlist</p>
        </div>
        {/* <div className="d-flex">
          <i
            className="fs-1 icon pe-2"
            style={{ fontSize: "25px" }}
            class="fa-sharp fa-solid fa-cart-shopping"
          >
          </i>
          <p className="ps-3">My cart</p>
        </div> */}
        <div className="ps-3">
          <img
            src={userInfo.Auth.image}
            className="userrasm mb-2 rounded-circle"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
