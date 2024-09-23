import imgCafePreto from '../../assets/images/imagem-cafe-preto.png'


export function CafePreto() {
    return (
        <>
            <div className="w-80 h-[500px] rounded-[3.125rem] bg-gradient-to-bl from-black to-red-950">
                  <img src={imgCafePreto} alt="Imagem café com leite" className="mt-5"/>
                  <p className="text-center text-xl font-semibold text-white">R$ 12,00</p>
                  <h1 className="text-center font-semibold text-3xl text-white mt-2">Café Preto</h1>
                  <p className="text-white mt-5  font-normal text-center">Grãos selecionados feitos no seu método de preparo favorito.</p>
                  <button className="bg-white w-72 h-14 rounded-full mt-16 ml-4 text-black font-semibold text-lg drop-shadow-2xl hover:bg-red-900 duration-150">Delivery</button>
              </div>
        </>
    )
}