import React, { useState, useEffect } from 'react';


const Exercicio13 = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(){
    try {
      const response = await fetch('https://fakestoreapi.com/products')
         if(!response.ok){
           throw new Error('Erro');
         }

    const data = await response.json();
    setProdutos(data);
    } catch (error) {
      console.error("Erro:",error);
    }finally {
      setLoading(false);
    }

  };
  useEffect(() => {
    fetchData();
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


   return (
      <div>
        <h1>Products List</h1>
        <ul>
          {produtos.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <strong>${product.price}</strong>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Exercicio13;