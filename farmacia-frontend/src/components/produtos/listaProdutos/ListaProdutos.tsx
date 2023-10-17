import React from 'react';
import CardProdutos from '../cardProdutos/CardPordutos';

function ListaProdutos() {
 
  return (
    <>
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'> 
          <CardProdutos  />
      </div>
    </>
  );
}

export default ListaProdutos;