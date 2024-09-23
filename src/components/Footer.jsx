import iconInstagram from '../assets/images/icons8-instagram.png'
import iconFacebook from '../assets/images/icons8-facebook.png'
import iconWhatsapp from "../assets/images/icons8-whatsapp.png"



export function Footer() {
    return (
        <>
            <footer className="bg-background-white h-96 w-screen flex justify-center gap-60 border-t-2 border-red-100">
            
                    <div className="mt-20">
                        <h1 className="text-text-color-light-gray-200 font-medium">Informações</h1>
                        <p className="text-Headings-color mt-5 max-w-[300px]">Todos os direitos reservados Meow Cafe Ltda.</p>
                        <p className="text-Headings-color mt-5 max-w-[300px]">Um lugar perfeito para pais de pets e amantes de café!</p>

                        <div className="flex mt-5">
                            <img src={iconInstagram} alt="Icon Instagram" className="cursor-pointer"/>
                            <img src={iconFacebook} alt="Icon Facebook" className="cursor-pointer"/>
                            <img src={iconWhatsapp} alt="Icon Whatsapp" className="cursor-pointer"/>
                        </div>
                    </div>

                    <div className="mt-20">
                        <h1 className="text-text-color-light-gray-200 font-medium">Links Úteis</h1>
                        <ul>
                            <li className='text-Headings-color mt-5 max-w-[300px]'><a href="#inicio">Início</a></li>
                            <li className='text-Headings-color'><a href="#sobre">Sobre</a></li>
                            <li className='text-Headings-color'><a href="#produtos">Produtos</a></li>
                            <li className='text-Headings-color'><a href="#delivery">Delivery</a></li>
                        </ul>
                    </div>     

                    <div className="mt-20">
                        <h1 className="text-text-color-light-gray-200 font-medium">Institucional</h1>
                            <p className='text-Headings-color'>CNPJ: XX. XXX. XXX/0001-XX</p>
                            <p className='text-Headings-color'>Endereço: Lorem ipsum, 64</p>
                            <p className='text-Headings-color'>Política de Privacidade</p>
                            <p className='text-Headings-color'>Dúvidas Frequentes</p>
                            <p className='text-Headings-color'>Ajuda</p>
                            <p className='text-Headings-color'>Acessibilidade</p>
                    </div>
            </footer>
        </>
    )
}