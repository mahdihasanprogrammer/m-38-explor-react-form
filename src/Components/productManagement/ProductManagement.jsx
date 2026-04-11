import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products, setProduct] = useState([]);

    const handleProducts = (newProduct) =>{

        const updatedProduct = [...products, newProduct ];
        setProduct(updatedProduct);
    }


    return (
        <div>
            <ProductForm handleProducts={handleProducts} />
            <ProductTable products={products} />
        </div>
    );
};

export default ProductManagement;