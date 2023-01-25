import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      // const response = await axios(API + '?limit=100&offset=100');
      const response = await axios(API);
      setProducts(response.data);
      setLoading(false);
    };
    getProducts();
  }, [API]);
  return [products, loading];
};

export default useGetProducts;
