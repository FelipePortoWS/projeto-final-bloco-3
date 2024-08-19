import React from 'react';

import CardCategoria from '../cardcategoria/CardCategoria';

function GetAllCategoria() {
    return(
    <>
    <div className='grid grid-cols-3'>
    <CardCategoria/>
    <CardCategoria/>
    <CardCategoria/>
    <CardCategoria/>   
    </div>
    </>
    )
}

export default GetAllCategoria;