import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // api calls
    const fetchData = async () => {
      const { data } = await Axios.get('/api/products');
      setProducts(data);
    };
  }, []);
  return (
    <ul className="products">
      {data.products.map((product) => (
        <li>
          <div className="product">
            <Link to={'/products/' + product._id}>
              <img className="product-imag" src={product.image} alt="Product" />
            </Link>
            <div className="product-name">
              <Link to={'/products/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreen;
