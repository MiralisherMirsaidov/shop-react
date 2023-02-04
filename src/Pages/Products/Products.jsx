import axios from "axios";
import React, { useEffect, useState } from "react";
import CardProducts from "../../Components/CardProducts/CardProducts";
import './ProductsStyle.css'
import camera from '../../img/camera.png'
import charger from '../../img/Charger.png'
import vector from "../../img/Vector.png";
import chip from "../../img/Chip.png";
import girl from "../../img/girl.png";
import lens from "../../img/Lens.png";
import stabily from "../../img/Stability.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SimpleSlider from "../../Components/Carusel/Carusel";


export default function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "https://dummyjson.com/products?limit=9",
      method: "get",
    })
      .then((res) => {
        console.log(res.data.products);
        setData([...res.data.products]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="py-5">
      <SimpleSlider />
      <div className="container pt-5">
        <div className="py-5 text-center">
          <h2 className="fw-bold">What’s included</h2>
          <div className="d-flex justify-content-around py-5">
            <img src={camera} alt="" />
            <img src={charger} alt="" />
            <img src={lens} alt="" />
            <img src={vector} alt="" />
          </div>
          <div className="d-flex py-5">
            <div className="textproduct p-5">
              <h1 className="text-white">Expand your creative playground</h1>
              <p className="text-white">
                Your full frame journey begins with the Z 5. Simple yet
                sophisticated, compact yet powerful, the Z 5 is built to grow
                with you. It’s everything you’d expect from a full frame
                mirrorless camera—intense detail, expansive views, brilliant low
                light capabilities, 4K UHD video and more—plus all the
                innovative tools you need to push the limits of your creativity.
              </p>
            </div>
            <div>
              <img
                src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                alt=""
                className="telefon"
              />
            </div>
          </div>
          <div className="py-5">
            <div className="row stabilityyou">
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="">
                  <img src={chip} alt="" />
                  <div className="pt-4">
                    <h2>Super powered.</h2>
                    <p>
                      Z 5 is powered by Nikon’s fast, comprehensive EXPEED 6
                      image processing system. It’s the secret behind the
                      camera’s sensational photo and video quality, autofocus
                      performance, low-light capabilities, distortion control,
                      image clarity, color reproduction and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="">
                  <img src={girl} alt="" />
                  <div className="pt-4">
                    <h2>The stabilityyou crave.</h2>
                    <p>
                      Sharpness starts with stability, and Z 5 has one of the
                      best in-camera image stabilization systems available.
                      NIKKOR Z lenses activate 5-axis VR image stabilization—up
                      to five stops* of stabilization in up to five directions
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <div className="">
                  <img src={stabily} alt="" />
                  <div className="pt-4">
                    <h2>In the blink of an iris.</h2>
                    <p>
                      Freeze time with shutter speeds as fast as 1/8000 of a
                      second—fast enough to capture moments invisible to the
                      naked eye. When shooting with wide aperture settings for
                      shallow depth-of-field and blurred backgrounds, that speed
                      can also be used to control your shot’s brightness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row h-auto">
          {data.length > 0 ? (
            <>
              {data.map((arr, key) => {
                return (
                  <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 pb-3">
                    <CardProducts state={arr} />
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="text-center">
          <Link to={"/nextPage"}>
            <Button className="w-25 batafsil py-3 my-5" variant="contained">
              More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
