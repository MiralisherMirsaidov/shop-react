import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsAypi from '../../Utilits/ProductsAypi';
import './Info.css'

const Info = () => {
  const [info, setInfo] = useState({});
    const params = useParams();
  console.log(params);

      useEffect(() => {
        ProductsAypi.getSingleProduct(params.id)
          .then((res) => { 
            console.log(res);
            setInfo({ ...res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  
    return (
      <div className="container py-5 ">
        <div className="text-center py-4">
          <h1 className="text-primary">Info</h1>
        </div>
        <div className="row h-auto">
          {info ? (
            <>
              <div className="col-12">
                <div className="card singlecard shadow p-4">
                 <div className='d-flex'>
                     <img src={info.thumbnail} className="singleimg" alt="" />
                   <div className='pt-5 mt-5 ps-5'>
                     <h3 className="text-secondary">{info.brand}$</h3>
                     <h1 className="text-muted">{info.title}</h1>
                     <h2 className="text-primary">{info.price} $</h2>
                     <h4 className="text-secondary">{info.description}</h4>
                     <Button className="w-25 batafsil py-3" variant="contained">
                       Add to cart
                     </Button>
                   </div>
                 </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
}

export default Info;
