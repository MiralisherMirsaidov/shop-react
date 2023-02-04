import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducts from '../../Components/CardProducts/CardProducts';
import ProductsAypi from '../../Utilits/ProductsAypi';

const Search = () => {
    const params = useParams()
    useEffect(() => {
        ProductsAypi.searchProducts(params.search)
            .then(res => { console.log(res) })
        .catch(err =>{console.log(err)})
    }, []);

     const [searchProducts, setSearchProducts] = useState([]);

     useEffect(() => {
       ProductsAypi.searchProducts(params.search)
         .then((res) => {
           console.log(res);
            setSearchProducts([...res.data.products]);
         })
         .catch((err) => {
           console.log(err);
         });
     }, []);
    
    console.log(params.search);
    return (
      <div className="container py-5 ">
        <div className="text-center py-4">
          <h1 className="text-primary">Search Products</h1>
        </div>
        <div className="row h-auto">
          {searchProducts.length > 0 ? (
            <>
              {searchProducts.map((arr, key) => {
                return (
                  <div className="col-4 pb-3">
                    <CardProducts state={arr} />
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
}

export default Search;
