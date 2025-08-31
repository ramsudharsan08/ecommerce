import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ShimmerBoard from "../components/Shimmer/ShimmerBoard";
import { useSearchParams } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams]= useSearchParams();

    useEffect(() => {
      console.log(`${process.env.REACT_APP_API_URL}/products?${searchParams}`);
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res => res.json())
        .then( res => setProducts(res.products))
    },[searchParams])
  return <Fragment>
    <h1 id="products_heading">Latest Products</h1>
    {products.length === 0 ? <ShimmerBoard /> : (
      <section id="products" className="container mt-5">
        <div className="row">
          {products.map(product => <ProductCard product={product}/>)}
        </div>
      </section>
    )}
  </Fragment>
}

export default Home