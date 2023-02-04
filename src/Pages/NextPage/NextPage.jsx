import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardProducts from "../../Components/CardProducts/CardProducts";
import ProductsAypi from "../../Utilits/ProductsAypi";

const NextPage = () => {
  const [next, setNext] = useState([]);
  const [more, setMore] = useState(18)

  useEffect(() => {
    ProductsAypi.getProductsLimit(more)
      .then((res) => {
        setNext([...res.data.products]);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [more]);

  function moreProduct() {
     setMore(prev=> prev + 3)
  }

  return (
    <div className="container py-5 ">
      <div className="text-center py-4">
        <h1 className="text-primary">Next Page </h1>
      </div>
      <div className="row h-auto">
        {next.length > 0 ? (
          <>
            {next.map((arr, key) => {
              return (
                <div
                  key={arr.id}
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-12 col-sm-12 pb-3"
                >
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
        <Button onClick={moreProduct} className="w-25 batafsil py-3 my-5" variant="contained">
          More
        </Button>
      </div>
    </div>
  );
};

export default NextPage;
