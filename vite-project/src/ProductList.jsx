import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from './store';

const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://bedos-jip-ca-servers.onrender.com/products');
                dispatch(setProducts(response.data));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    return (
        <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

const Product = ({ product }) => (
    <li>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category.join(', ')}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </li>
  );

  export default ProductsList;