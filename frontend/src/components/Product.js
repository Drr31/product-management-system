import React, { useEffect, useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import { getProduct } from '../services/ProductService';
import "../App.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let mounted = true;
    getProduct()
      .then(data => {
        if (mounted) {
          setProducts(data);
        }
      });
    return () => (mounted = false);
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.nom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <h1 style={{ marginLeft: '2rem' }} className="display-4">
          Nos Produits :
        </h1>
        <div style={{ marginBottom: '2rem' }} className="search-container py-4">
          <Form.Control
            type="text"
            placeholder="Rechercher par nom"
            value={searchQuery}
            onChange={handleSearch}
          />
          <div className="search-icon">
            <i className="bi bi-search"></i>
          </div>
        </div>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>nom</th>
              <th>prix_unitaire</th>
              <th>quantite</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.nom}</td>
                <td>{product.prix_unitaire}</td>
                <td>{product.quantite}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Product;
