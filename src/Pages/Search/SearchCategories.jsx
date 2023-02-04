import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProducts from '../../Components/CardProducts/CardProducts';
import ProductsAypi from '../../Utilits/ProductsAypi';

const SearchCategories = () => {
    const params = useParams()
    const [datas, setDatas] = useState([])
    useEffect(() => {
      ProductsAypi.getSearchCategories(params.categories).then((res) => {
        setDatas([...res.data.products]);
        console.log(res.data.products);
      });
    }, [params]);
    return (
      <div className="container py-5">
        <div className="text-center py-4">
          <h1 className="text-primary">Search Categories</h1>
        </div>
        <div className="row h-auto">
          {datas.length > 0 ? (
            <>
              {datas.map((arr, key) => {
                return (
                  <div key={arr.key} className="col-4 pb-3">
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

export default SearchCategories;
