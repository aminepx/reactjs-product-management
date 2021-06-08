import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { context } from '../../API/DataCenter';

const Update = (props) => {

    const {update}=useContext(context)
    const [product,setproduct]=useState({})

    const handleChange=(e)=>{
        setproduct({
            ...product,
            [e.target.name]:e.target.value
        })
     }

     useEffect(() => {
        const id=props.match.params.id
      axios.get("http://127.0.0.1:8000/api/oneProduct/"+id)
      .then(res=>{
          console.log(res.data.product);
          setproduct(res.data.product)
      })
    }, [])

    return (
    <div className="container">
        <div className="row col-md-6 offset-3 form-group mt-5">
            <input type="text" name='name' className="form-control mt-2" onChange={handleChange} value={product.name}/>
            <input type="text" name='price' className="form-control mt-2" onChange={handleChange} value={product.price}/>
            <input type="text" name='description' className="form-control mt-2" onChange={handleChange} value={product.description}/>
            <button onClick={()=>update(product)}  className="btn btn-warning form-control">update</button>
        </div>
    </div>
    );
}

export default Update;
