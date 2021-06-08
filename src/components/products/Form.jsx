import React, { useContext, useState } from 'react';
import { context } from '../../API/DataCenter';

const Form = () => {
    const {add}=useContext(context)

    const [product,setproduct]=useState({})

    const handleChange=(e)=>{
       setproduct({
           ...product,
           [e.target.name]:e.target.value
       })
    }

    return (
      
            <div className="container">
                <div className="row col-md-6 offset-3 form-group mt-5">
                    <input type="text" name='name' className="form-control mt-2" onChange={handleChange} />
                    <input type="text" name='price' className="form-control mt-2" onChange={handleChange} />
                    <input type="text" name='description' className="form-control mt-2" onChange={handleChange} />
                    <button onClick={()=>add(product)} className="btn btn-success form-control">add new</button>
                </div>
            </div>
        
    );
}

export default Form;
