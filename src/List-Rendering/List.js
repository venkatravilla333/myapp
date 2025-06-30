import React, { useState } from 'react';

function List() {
  var [products] = useState([
    {
      id: 1,
      name: 'apple',
      price: 200,
    },
    {
      id: 2,
      name: 'banana',
      price: 50,
    },
    {
      id: 3,
      name: 'grape',
      price: 100,
    },
    {
      id: 4,
      name: 'papaya',
      price: 30,
    },
    {
      id: 5,
      name: 'mango',
      price: 70,
    },
    {
      id: 6,
      name: 'orange',
      price: 40,
    },
  ]);
  return (
    <div>
      {/* <h5>name: {products[0].name}</h5>
    <h5>price: {products[0].price}</h5>
    <h5>name: {products[1].name}</h5>
    <h5>price: {products[1].price}</h5>
    <h5>name: {products[2].name}</h5>
    <h5>price: {products[2].price}</h5>
    <h5>name: {products[3].name}</h5>
    <h5>price: {products[3].price}</h5>
    <h5>name: {products[4].name}</h5>
    <h5>price: {products[4].price}</h5> */}
      {products.map((product) => {
        return (
          <React.Fragment key={product.id}>
            <h5>Name: {product.name}</h5>
            <h5>Price: {product.price}</h5>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default List;
