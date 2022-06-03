import React,{useState,useEffect} from 'react'
import CgDiv from '../components/CgDiv'
import ProductsC from '../components/ProductsC'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'


const Home = () => {
 
    return (
        <>
        <Helmet>
            <title>ESHOP</title>
        </Helmet>
            <div>
                <CgDiv/>
                <br></br>
                <br></br>
                <ProductsC/>
        </div>
        </>
    )
}

export default Home
