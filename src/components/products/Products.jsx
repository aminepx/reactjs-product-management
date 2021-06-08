import React, { useContext } from 'react';
import { context } from '../../API/DataCenter';
import Product from './Product';

const Products = () => {
    const {products}=useContext(context)
    return (
        <div className='container'>
            <div className="row">
            {
                products.map((product)=>(

                    <Product key={product.id} myData={product} />
                ))
            }
            </div>
        </div>
    );
}

export default Products;
