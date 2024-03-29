/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className='mb-3'>{product.brand}</p>
        <p className=''>Ksh{product.price}</p>
        <button className='primary-button' type='button' onClick={() => addToCartHandler(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
