import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Details = (props) => {
   
    const [product,setproduct]=useState({})

    useEffect(() => {
        const id=props.match.params.id
      axios.get("http://127.0.0.1:8000/api/oneProduct/"+id)
      .then(res=>{
          console.log(res.data.product);
          setproduct(res.data.product)
      })
    }, [])

    return (
        <div>
            <h1>details</h1>
            <h2>{product.name}</h2>
            <h2>{product.description}</h2>
            <h2>{product.price}</h2>
        </div>
    );
}

export default Details;
