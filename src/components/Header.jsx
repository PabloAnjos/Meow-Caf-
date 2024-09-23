import meowImg from '../assets/images/logo-meow.png'
import cafeImg from '../assets/images/imagem-cafe.png'
import imgElipse from '../assets/images/Ellipse.png'



export function Header() {
    return (
        <>
            <header className='bg-background-white h-[500px] flex' id='inicio'>
                <img src={cafeImg} alt="Imagem Café" className='absolute ml-[1000px]'/>
                <img src={imgElipse} className='w-[130px] h-[130px] absolute ml-[1270px] mt-[300px]'/>

                        <div className='absolute mt-[300px] w-[500px] ml-[400px]'>
                            <h1 className='font-bold text-2xl text-Headings-color'>Sabor inesquecível</h1>
                            <h2 className='text-Headings-color font-bold text-[5rem] max-w-1 leading-[5rem] mt-2'>Meow Café</h2>
                            <p className='text-Headings-color max-w-[18.75rem] mt-2'>Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria tem um espaço confortável para você e seu melhor amigo. </p>
                        </div>
                    

                <nav className='flex items-center m-auto w-[1200px] -mt-1'>
                    <img src={meowImg} alt="Logo Meow" />
                    <h1 className='font-medium text-text-color-dark text-2xl'>Meow Café</h1>
                    <ul className='flex gap-5 ml-10'>
                        <li className='text-Headings-color font-medium text-xl'><a href="#" className='hover:text-pink-color-2'>Início</a></li>
                        <li className='text-Headings-color font-medium text-xl'><a href="#" className='hover:text-pink-color-2'>Produtos</a></li>
                        <li className='text-Headings-color font-medium text-xl'><a href="#" className='hover:text-pink-color-2'>Sobre</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}