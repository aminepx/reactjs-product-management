import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const context=createContext()
const DataCenter = (props) => {

    const [products,setproducts]=useState([])

    useEffect(() => {
          function getProducts(){
              axios.get('http://127.0.0.1:8000/api/all')
              .then(data=>{
                  console.log(data.data.products);
                  setproducts(data.data.products)
              })
          }
          getProducts()
    }, []);

    function deleteProduct(id){
        axios.delete('http://127.0.0.1:8000/api/deleteProduct/'+id)
        .then(()=>{
            setproducts(
                products.filter((product)=>product.id!=id)
            )
        })
     
    }

    function add(product)
    {
        axios.post('http://127.0.0.1:8000/api/store',product)
        .then(()=>{
           setproducts([product,...products])
           window.location='/'
        })
    }

    function update(product)
    {
       axios.post("http://127.0.0.1:8000/api/updateProduct",product)
       .then(()=>{
           window.location='/'
       })
    }


    return (
        <div>
            <context.Provider value={{products,deleteProduct,add,update}}>
                {props.children}
            </context.Provider>
        </div>
    );
}

export default DataCenter;
