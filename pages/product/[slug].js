/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
// import { Image } from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';

const ProductScreen = () => {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { slug } = query;
  console.log(slug);
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <img
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></img>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Categoty: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.ratings} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>Ksh {product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductScreen;
