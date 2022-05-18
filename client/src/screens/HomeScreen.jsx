import React, { useEffect, useReducer, useState } from 'react';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Products from '../components/Products';
import { Helmet } from 'react-helmet-async';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: '',
  });
  //   const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
      //   setProducts(data);
    };

    (async () => await fetchData())();
  }, []);
  return (
    <>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Featured Product</h1>
      <div className="products">
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((elem) => (
              <Col key={elem.slug} sm={6} md={4} lg={3} className="mb-3">
                <Products product={elem} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

export default HomeScreen;
