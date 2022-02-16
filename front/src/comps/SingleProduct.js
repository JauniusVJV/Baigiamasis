import React from 'react';
import {useNavigate} from "react-router-dom";

const SingleProduct = ({item}) => {
    const nav = useNavigate()
    function goToPage() {
        nav("/product/"+item._id)
    }

    return (
        <div className="product" onClick={goToPage}>
            <img src={item.image} alt=""/>
            <h4>{item.title}</h4>
            <h3>{item.price}€</h3>
        </div>
    );
};

export default SingleProduct;