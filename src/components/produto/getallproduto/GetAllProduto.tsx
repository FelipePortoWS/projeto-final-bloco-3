import React from 'react';

import CardProduto from '../cardproduto/CardProduto';

function GetAllProduto() {
    return(
    <>
    <div className='grid grid-cols-3 gap-2 m-2'>
    <CardProduto/>
    <CardProduto/>
    <CardProduto/>
    <CardProduto/> 
      
    </div>
    </>
    )
}

export default GetAllProduto;