import { Link, useNavigate } from 'react-router-dom'


function Navbar() {

    let navbarComponent

    /*
      navbarComponent = (
        <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia</Link>

            <div className='flex gap-4'>
              <Link to='/produtos' className='hover:underline'>Produtos</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/modprodutos' className='hover:underline'>Adicionar ou modificar produtos</Link>
              <Link to='/modcategorias' className='hover:underline'>Adicionar ou modificar categorias</Link>
            </div>
          </div>
        </div>
      )
*/

  navbarComponent = (
    <div className='w-full bg-gradient-to-r from-violet-700 to-pink-950 text-white flex justify-center py-6'>
      <div className="container flex justify-between text-lg">
        <div className='text-2xl font-bold font-serif italic'>Farmácia</div>

        <div className='flex gap-4'>
          <Link to='/Home' className='hover:underline'>Home</Link>
          <Link to='/Produtos' className='hover:underline'>Produtos</Link>
          <Link to='/PostProduto' className='hover:underline'>Adicionar produto</Link>
          <Link to='/Categorias' className='hover:underline'>Categorias</Link>
          <Link to='/PostCategoria' className='hover:underline'>Adicionar categoria</Link>
        </div>
      </div>
    </div>

  )

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar