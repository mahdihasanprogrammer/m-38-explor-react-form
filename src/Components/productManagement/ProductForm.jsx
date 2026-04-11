import React, { useState } from 'react';

const ProductForm = ({ handleProducts}) => {

const [error, setError] = useState('');
const handleSubmit = (e) =>{
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, product, price);


    // validation data;
    if(name.length ==0){
        setError('please provide a name');
        return
    }
    else if(price.length ==0){
        setError('please provide a price of product');
        return
    }
    else if(price <= 0){
        setError('this is negative value , provide a positive value')
         return
    }
    else if(quantity.length ==0){
        setError('provide a quantity')
         return
    }
    else if(quantity <= 0){
        setError('provide a positive value')
         return
    }
    else{
        setError('')
    }
  
    const productObj = {
        name, price, quantity
    }
    // console.log(productObj);

    handleProducts(productObj);
    console.log(handleProducts)
    
}

    return (
        <div>
            <h3>Add a product</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='product name'/> <br />

                <input type="text" name="price" placeholder='product price'/> <br />

                <input type="text" name="quantity" placeholder='product quantity'/> <br />

                <input type="submit" value="submit" />
            </form>

            <p style={{color: 'red'}}>{error}</p>
        </div>
    );
};

export default ProductForm;