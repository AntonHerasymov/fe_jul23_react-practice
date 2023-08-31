import React from 'react';
import './App.scss';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';
import { ProductTable } from './components/ProductTable/ProductTable';
import { Panel } from './components/Panel/Panel';
// import categories from './api/categories';

const products = productsFromServer.map((product) => {
  const category = findCategoryById(product.categoryId);

  return {
    ...product,
    category: findCategoryById(product.categoryId),
    user: findOwnerById(category.ownerId),
  };
});

function findOwnerById(ownerId) {
  return usersFromServer.find(user => user.id === ownerId);
}

function findCategoryById(categoryId) {
  return categoriesFromServer.find(category => category.id === categoryId);
}

export const App = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Product Categories</h1>

      <Panel users={usersFromServer} categories={categoriesFromServer} />

      <ProductTable products={products} />
    </div>
  </div>
);
