import {useEffect} from 'react';
import SingleProduct from "../comps/SingleProduct";

const MainPage = ({setProducts, allProducts}) => {

    useEffect(() => {
        fetch("http://localhost:4000/all")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.products)
            })
    }, [])

    return (
        <div className="d-flex wrap">
            {allProducts.map((x, i) => <SingleProduct key={i} item={x}/>)}
        </div>
    );
};

export default MainPage;