import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

const SingleProductPage = ({setCart, getCart}) => {

    const nav = useNavigate()
    const [product, setProduct] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        fetch("http://localhost:4000/single/" + id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data.product)
            })
    }, [])


    function addToCart() {
        const itemInCart = getCart.find(x => x._id === product._id)

        if(itemInCart) {
            const itemIndex = getCart.findIndex(x => x._id === product._id)
            getCart[itemIndex].quantity++
            setCart([...getCart])
        } else {
            setCart([...getCart, product])
        }

    }

    function deleteProduct() {
        fetch("http://localhost:4000/delete/" + id)
            .then(res => res.json())
            .then(data => {

                if(data.success) {
                    nav('/')
                }

            })
    }

    return (
        <div>
            {product &&
                <div className="d-flex p-20">
                    <img src={product.image} className="grow1" alt=""/>
                    <div className="grow1">
                        <h1>{product.title}</h1>
                        <h2>{product.price}€</h2>
                        <button onClick={addToCart}>Add to cart</button>
                        <button onClick={deleteProduct}>Delete Product</button>
                    </div>
                </div>
            }

        </div>

    );
};

export default SingleProductPage;