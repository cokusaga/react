import React, { useState, useEffect } from 'react';

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState({}); // Store products for each category

  useEffect(() => {
    // Fetch all categories
    fetch('http://127.0.0.1:8000/api/category/')
      .then(res => res.json())
      .then(data => {
        setCategories(data);

        // Fetch products for all categories
        data.forEach(category => {
          fetch(`http://127.0.0.1:8000/api/product/?category=${category.shortcode}`)
            .then(res => res.json())
            .then(productData => {
              setProducts(prev => ({ ...prev, [category.shortcode]: productData }));
            })
            .catch(err => console.error(`Error fetching products for ${category.shortcode}:`, err));
        });
      })
      .catch(err => console.error('Error fetching categories:', err));
  }, []);

  return (
    <div className="categories-container">
      <h1>Categories</h1>
      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.shortcode} className="category-card">
            <h2>{category.display_name}</h2>
            {products[category.shortcode] ? (
              <ul>
                {products[category.shortcode].map(product => (
                  <li key={product.id}>
                    <p><strong>{product.name}</strong></p>
                    <p>Price: ${product.price}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}