import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../API/DataCenter';

const Product = (props) => {
    const {deleteProduct}=useContext(context)
    return (
      
            <ul className="list-group col-md-8 mt-2">
                <li className="list-group-item active">product : {props.myData.id}</li>
                <li className="list-group-item"><strong>name</strong>{props.myData.name}</li>
                <li className="list-group-item"><strong>price</strong>{props.myData.price}</li>
                <li className="list-group-item"><strong>description</strong>{props.myData.description}</li>
                <li className="list-group-item">
                    <button onClick={()=>deleteProduct(props.myData.id)} className="btn btn-danger">delete</button>
                    <Link   to={'/details/'+props.myData.id} className="btn btn-warning">show</Link>
                    <Link   to={'/update/'+props.myData.id} className="btn btn-secondary">update</Link>
                 </li>
            </ul>
    
    );
}

export default Product;
