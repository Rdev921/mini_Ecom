import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
    const API_URL = 'https://fakestoreapi.com/products';
    const[productData,setProductData] = useState([]);
    const[loading,setLoading] = useState(false);

    const fetchProductsData = async()=>{
        try {
            setLoading(true);
            const res = await fetch(API_URL);
            const data = await res.json();
            setProductData(data);
        } catch (error) {
            console.log('Product not found');
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProductsData();
    },[])
  return (
    <div >
    {
    loading ? (<Spinner/>) : (productData.length > 0 ? (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh]'>
            {
                productData.map((item)=>(
                <Product key={item.id} item={item}/>
            ))}
        </div>
    ): "No Data Found")}
    </div>
  )
}

export default Home