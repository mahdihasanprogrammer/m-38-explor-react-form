import React from 'react';

const ProductTable = ({products}) => {
 console.log(products)

    return (
     <table>
          {products.length >0 &&
        <thead>
            <tr>
                <th>No.</th>
                <th>Name: </th>
                <th>price: </th>
                <th>quantity </th>
                
            </tr>
        </thead>
            }
      
        <tbody>
            { 
                products.map((product, index )=> <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                </tr>)
            }
        </tbody>
     </table>
    );
};

export default ProductTable;