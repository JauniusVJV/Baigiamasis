import {useRef, useState} from 'react';
import {useNavigate} from "react-router-dom"

const CreatePorductForm = () => {
    const nav = useNavigate()
    const titleRef = useRef()
    const imageRef = useRef()
    const priceRef = useRef()

    const [error, setError] = useState(null)

    async function create() {

        const product = {
            title: titleRef.current.value,
            image: imageRef.current.value,
            price: priceRef.current.value
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        }

        const res = await fetch("http://localhost:4000/create", options)
        const data = await res.json()

        console.log(data)

        if(data.success) {
            nav("/")
        } else {
            setError(data.message)
        }


    }

    return (
        <div className="d-flex column">
            <input type="text" ref={titleRef} placeholder="title"/>
            <input type="text" ref={imageRef} placeholder="image"/>
            <input type="text" ref={priceRef} placeholder="price"/>
             <button onClick={create}>Create Product</button>
            <h3>{error}</h3>
        </div>
    );
};

export default CreatePorductForm;